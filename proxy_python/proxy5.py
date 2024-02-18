from uuid import uuid4
import tornado.ioloop
import tornado.websocket
import json
import zmq

from tornado.testing import AsyncTestCase
from zmq.eventloop.ioloop import ZMQIOLoop

from zmq.eventloop.zmqstream import ZMQStream

msg_id  = str(uuid4())


     

class JupyterClient:
    def __init__(self, kernel_id, shell_port, iopub_port, stdin_port, control_port, hb_port):
        self.ctx = zmq.Context()
        self.kernel_id = kernel_id
        self.shell_port = shell_port
        self.iopub_port = iopub_port
        self.stdin_port = stdin_port
        self.control_port = control_port
        self.hb_port = hb_port

        self.shell_ws =  self.ctx.socket(zmq.REP)
        self.iopub_ws = self.ctx.socket(zmq.REP)
        self.stdin_ws = self.ctx.socket(zmq.REP)
        self.control_ws = self.ctx.socket(zmq.REP)

        self.stream1 = None
        self.stream2 = None
        self.stream3 = None
        self.stream4 = None
        self.stream5 = None


    def connect(self):
        # Connect to the shell channel
        self.shell_ws = self.shell_ws.connect(f"tcp://127.0.0.1:{self.shell_port}")
        #self.stream1 = ZMQStream(self.shell_ws)
        # Connect to the IOPub channel
        self.iopub_ws = self.iopub_ws.bind(f"tcp://127.0.0.1:{self.iopub_port}")
        #self.stream2 = ZMQStream(self.iopub_ws)
        # Connect to the control channel
        #self.control_ws =  self.control_ws(f"tcp://127.0.0.1:{self.control_port}")
        #self.stream3 = ZMQStream(self.control_ws)
        # Connect to the stdin channel
        #self.stdin_ws = self.stdin_ws.bind(f"tcp://127.0.0.1:{self.stdin_port}")
        #self.stream4 = ZMQStream(self.stdin_ws)
        # Connect to the heartbeat channel
        #self.hb_port_ws = self.hb_port_ws.bind(f"tcp://127.0.0.1:{self.hb_port}")
        #self.stream5 = ZMQStream(self.hb_port_ws)

        print("Connected to server channels")


    def send_shell_message(self, message):
        self.shell_ws.send(message)

    def receive_iopub_message(self):
        pass



    
# Replace with actual connection information
kernel_id = "1f3eb6b9-6e60-475d-ae77-ececbdc5ece1"
shell_port =  65111
iopub_port =  65112
stdin_port =  65113
hb_port =  65114
control_port =  65115


client = JupyterClient(kernel_id, shell_port, iopub_port, stdin_port, control_port, hb_port)
client.connect()

# Send a message to the kernel
client.send_shell_message({
    "header": {
        "msg_id": msg_id,
        "username": 'IP 520S-14IKB 96IX',
        "session": msg_id,
        "msg_type": "execute_request",
        "version": "5.2"
    },
    "content": {
        "code": "print('Hello, Jupyter!')",
        "silent": False,
        "store_history": True,
        "user_expressions": {},
        "allow_stdin": True
    }
})

    # Receive a message from the kernel
    #message = client.receive_iopub_message()
    #print(message)




 

# 
    


