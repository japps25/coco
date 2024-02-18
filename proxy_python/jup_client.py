import json
import uuid
from jupyter_client import KernelManager
import zmq

# Start the Jupyter kernel
km = KernelManager()
km.start_kernel()

# Connect to the kernel
kc = km.client()
kc.start_channels()

# Send an execute request
msg_id = uuid.uuid4().bytes
content = {
    "code": "print('Hello, World!')",
    "silent": False,
    "store_history": True,
    "user_expressions": {},
    "allow_stdin": True
}
msg = [b'', msg_id, b'execute_request', json.dumps(content)]
kc.session.send(kc.iopub_channel, msg)

# Receive the execute reply
while True:
    try:
        reply = kc.session.recv(kc.iopub_channel)
        if reply[2] == b'execute_reply':
            break
    except zmq.ZMQError as e:
        if e.errno == zmq.EAGAIN:
            continue
        else:
            raise

# Process the reply
reply_content = json.loads(reply[3])
print(reply_content['content']['text'])

# Close the client and shut down the kernel
kc.stop_channels()
km.shutdown_kernel()
