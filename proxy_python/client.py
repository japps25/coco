#
#   Request-reply client in Python
#   Connects REQ socket to tcp://localhost:5559
#   Sends "Hello" to server, expects "World" back
#
import hashlib
import json
from uuid import uuid4
import zmq

#  Prepare our context and sockets
context = zmq.Context()
socket = context.socket(zmq.REQ)
socket.connect("tcp://localhost:5559")

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



#  Do 10 requests, waiting each time for a response
while True:
    socket.send_multipart([b"", b"<IDS|MSG>", hmac_digest.encode(),
                            json.dumps(header).encode(),
                            json.dumps(parent_header).encode(),
                            json.dumps(metadata).encode(),
                            json.dumps(content).encode()])
    
    #  Get the reply.
    message = socket.recv()
    print(f"Received reply: {message}")

    