from uuid import uuid4
import tornado.ioloop
import tornado.websocket
import json
import zmq
""" set up a jupyter console session with --existing kernel-<id>.json"""

msg_id  = str(uuid4())

class JupyterClient:
    def __init__(self, kernel_id, shell_port, iopub_port, stdin_port, control_port):
        self.context = zmq.Context()
        self.kernel_id = kernel_id
        self.shell_port = shell_port
        self.iopub_port = iopub_port
        self.stdin_port = stdin_port
        self.control_port = control_port
        self.shell_ws =  None
        self.iopub_ws = None
        self.stdin_ws = None
        self.control_ws = None

    async def connect(self):
        # Connect to the shell channel
        self.shell_ws = await tornado.websocket.websocket_connect(
            f"ws://localhost:{self.shell_port}/api/kernels/{self.kernel_id}/shell"
        )

        # Connect to the IOPub channel
        self.iopub_ws = await tornado.websocket.websocket_connect(
            f"ws://localhost:{self.iopub_port}/api/kernels/{self.kernel_id}/iopub"
        )

        # Connect to the control channel
        self.control_ws = await tornado.websocket.websocket_connect(
            f"ws://localhost:{self.control_port}/api/kernels/{self.kernel_id}/control"
        )

        # Connect to the stdin channel
        self.stdin_ws = await tornado.websocket.websocket_connect(
            f"ws://localhost:{self.stdin_port}/api/kernels/{self.kernel_id}/stdin"
        )

        print("Connected to server channels")

    async def send_shell_message(self, message):
        if self.shell_ws:
            # Serialize each part of the message
            parts = [
                json.dumps(message['header']).encode('utf-8'),
                json.dumps(message['parent_header']).encode('utf-8'),
                json.dumps(message['metadata']).encode('utf-8'),
                json.dumps(message['content']).encode('utf-8'),
                *[buffer.encode('utf-8') for buffer in message.get('buffers', [])]
            ]
            # Send the serialized message
            for part in parts:
                await self.shell_ws.write_message(part, binary=True)
                print("Message sent")
        else:
            print("No shell connection")


    async def receive_iopub_message(self):
        if self.iopub_ws:
            # Receive each part of the message
            parts = []
            while True:
                part = await self.iopub_ws.read_message(binary=True)
                if part is None:
                    break
                parts.append(part)
            # Deserialize the message
            message = {
                'header': json.loads(parts[0]),
                'parent_header': json.loads(parts[1]),
                'metadata': json.loads(parts[2]),
                'content': json.loads(parts[3]),
                'buffers': [buffer.decode('utf-8') for buffer in parts[4:]]
            }
            return message


# Example usage:
async def main():
    # Replace with actual connection information
    kernel_id = "1f3eb6b9-6e60-475d-ae77-ececbdc5ece1"
    shell_port =  65111
    iopub_port =  65112
    stdin_port =  65113
    control_port =  65115

    client = JupyterClient(kernel_id, shell_port, iopub_port, stdin_port, control_port)
    await client.connect()

    # Send a message to the kernel
    await client.send_shell_message({
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
    message = await client.receive_iopub_message()
    print(message)

 

# Run the main function
tornado.ioloop.IOLoop.current().run_sync(main)
