import zmq
from uuid import uuid4
import json
import hashlib

# Initialize ZeroMQ context
context = zmq.Context()

# Create DEALER socket for shell communication
shell_socket = context.socket(zmq.DEALER)
shell_addr = "tcp://localhost:39807"

print(f"\nConnecting shell socket at {shell_addr}...")
shell_socket.connect(shell_addr)

# Create SUB socket for IOPUB messages
iopub_socket = context.socket(zmq.SUB)
iopub_addr = "tcp://localhost:39808"  # Replace with the correct IOPUB port if needed

print(f"\nSubscribing to IOPUB messages at {iopub_addr}...")
iopub_socket.connect(iopub_addr)
iopub_socket.setsockopt_string(zmq.SUBSCRIBE, '')

# Define message handlers
def on_shell_message(msg):
    print(f"\nShell socket says:\n")
    print("output:", msg.decode())

shell_socket.recv_multipart(on_shell_message)

def on_iopub_message(msg):
    print(f"\nIOPUB socket says:\n")
    print("output:", msg[-1].decode())  # Assuming the output is in the last frame

iopub_socket.recv_multipart(on_iopub_message)

# Set your key here
key = b'<key>'

# Prepare message parts
header = {"msg_id": str(uuid4()), "msg_type": "execute_request"}
parent_header = {}
metadata = {}
content = {
    'code': 'print("Hello world!")',
    'silent': False,
    'store_history': True,
    'user_expressions': {},
    'allow_stdin': False,
    'stop_on_error': True
}

# Create signature
sign = (json.dumps(header) +
        json.dumps(parent_header) +
        json.dumps(metadata) +
        json.dumps(content))
hmac_digest = hashlib.sha256(sign.encode()).hexdigest()

# Send message
shell_socket.send_multipart([b"", b"<IDS|MSG>", hmac_digest.encode(),
                             json.dumps(header).encode(),
                             json.dumps(parent_header).encode(),
                             json.dumps(metadata).encode(),
                             json.dumps(content).encode()])

# Start polling for messages
try:
    while True:
        # Poll sockets for incoming messages
        events = dict(zip(context.poller.poll(timeout=1000), [shell_socket, iopub_socket]))
        
        if shell_socket in events:
            on_shell_message(*events[shell_socket])
        
        if iopub_socket in events:
            on_iopub_message(*events.get(iopub_socket, []))
except KeyboardInterrupt:
    pass

# Clean up
shell_socket.close()
iopub_socket.close()
context.term()
