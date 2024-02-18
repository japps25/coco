import hmac
import zmq
from uuid import uuid4
import json
import hashlib
from tornado import escape



# Initialize ZeroMQ context
context = zmq.Context()

kernel_id = 'f63921f0-61b8-447a-a92c-693983a2f47c'
shell_port = 56745
iopub_port = 56746


# Create SUB socket for IOPUB messages
iopub_socket = context.socket(zmq.SUB)
iopub_addr = f"tcp://127.0.0.1:{iopub_port}"  

shell_socket = context.socket(zmq.REQ)
shell_addr = f"tcp://127.0.0.1:{shell_port}" 

print(f"\nSubscribing to IOPUB messages at {iopub_addr}...")
iopub_socket.connect(iopub_addr)
iopub_socket.setsockopt_string(zmq.SUBSCRIBE, '')

print(f"\nConnecting shell socket at {shell_addr}...")
shell_socket.connect(shell_addr)


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
    'allow_stdin': True,
    'stop_on_error': True
}

# # Create signature
sign = (json.dumps(header) +
         json.dumps(parent_header) +
         json.dumps(metadata) +
         json.dumps(content))
hmac_digest = hmac.new(key, sign.encode(), hashlib.sha256).hexdigest()


def on_iopub_message(msg):
    #print(f"\nIOPUB socket says:\n")
    print("output:", escape.json_decode(msg[-1]))  # Assuming the output is in the last frame


# Create a poller
poller = zmq.Poller()
poller.register(iopub_socket, zmq.POLLIN)
poller.register(shell_socket, zmq.POLLIN)

shell_socket.send([b"", b"<IDS|MSG>", hmac_digest.encode(),
                                        json.dumps(header),
                                        json.dumps(parent_header),
                                        json.dumps(metadata),
                                        json.dumps(content)]) 

# Start polling for messages
try:
    while True:
        events = dict(poller.poll(0.2))
        #events = dict(zip(context.poller.poll(timeout=1000), [shell_socket, iopub_socket]))
        
        if shell_socket in events:
            # Send message
            print("Shell socket received")
            message = shell_socket.recv_multipart()
            print("Received message:", message)

        if iopub_socket in events:
            print("IOPUB message received")
            message =iopub_socket.recv_multipart()
            on_iopub_message(message)
            
except KeyboardInterrupt:
    pass

# Close sockets
shell_socket.close()
iopub_socket.close()


# Terminate context

context.term()
