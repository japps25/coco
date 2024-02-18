from uuid import uuid4
import requests
import json
import sys
from ipykernel.kernelbase import Kernel
import tornado
from tornado.httpclient import AsyncHTTPClient, HTTPRequest
from jupyter_client import KernelManager, BlockingKernelClient, session, AsyncKernelClient
from tornado.websocket import websocket_connect
from tornado.escape import json_encode, json_decode, url_escape

class Kernel:
    def __init__(self, id, name, last_activity, execution_state, connections):
        self.id = id
        self.name = name
        self.last_activity = last_activity
        self.execution_state = execution_state
        self.connections = connections


def get_server_xsrf_cookie(hostname, token):
    try:
        response = requests.get(hostname + "/?token=" + token)
        cookies = response.headers.get('Set-Cookie').split(", ")
        for cookie in cookies:
            if cookie.startswith("_xsrf="):
                return cookie.split(";")[0].split("=")[1]
    except Exception as e:
        print(e)
        return None
    
def createNewKernel(hostname, token, xsrf):
    try:
        headers = {
            "Cookie": "_xsrf=" + xsrf,
            "Authorization": "token " + token,  
            "Content-Type": "application/json"
        }
        data = {
            "name": "python3"
        }
        response = requests.post(hostname + "/api/kernels", headers=headers, data=json.dumps(data))
        kernel = json.loads(response.text)
        #print(kernel)
        return Kernel(kernel["id"], kernel["name"], kernel["last_activity"], kernel["execution_state"], kernel["connections"])
    except Exception as e:
        print(e)
        return None

    
def getKernelSpecs():
    try:
        headers = {
            "Content-Type": "application/json"
        }
        response = requests.get(hostname + "/api/kernelspecs", headers=headers)
        kernel_specs = json.loads(response.text)
        return kernel_specs
    except Exception as e:
        print(e)
        return None
    



@tornado.gen.coroutine
def executeCode(hostname, code, kernel_id, xsrf, token):
    try:
        headers = {
            "Cookie": "_xsrf=" + xsrf,
            "Authorization": "token " + token,  
            "Content-Type": "application/json"
        }
        ws_url = "ws://" + hostname + "/api/kernels/" + kernel_id + "/channels"
        # PROBLEM AREA , need to figure out how to make a websocket request 
        ws = yield tornado.websocket.websocket_connect(ws_url)
        
        print('Connected to kernel websocket')
            # You can now interact with the WebSocket connection
    except Exception as e:
        print(f"Failed to connect to kernel websocket: {e}")

        for x in range(0, 2):
            print('Sending message {} of {}'.format(x+1, 1))
            msg_id = uuid4().hex
            # Send an execute request
            ws.write_message(json_encode({
                'header': {
                    'username': '',
                    'version': '5.0',
                    'session': '',
                    'msg_id': msg_id,
                    'msg_type': 'execute_request'
                },
                'parent_header': {},
                'channel': 'shell',
                'content': {
                    'code': code,
                    'silent': False,
                    'store_history': False,
                    'user_expressions' : {},
                    'allow_stdin' : False
                },
                'metadata': {},
                'buffers': {}
            }))

            # Look for stream output for the print in the execute
            while 1:
                msg = yield ws.read_message()
                msg = json_decode(msg)
                msg_type = msg['msg_type']
                print('Received message type:', msg_type)
                if msg_type == 'error':
                    print('ERROR')
                    print(msg)
                    break
                parent_msg_id = msg['parent_header']['msg_id']
                if msg_type == 'stream' and parent_msg_id == msg_id:
                    print('  Content:', msg['content']['text'])
                    break

    
    

if __name__ == '__main__':
    arg = sys.argv[1]
    hostname = arg.split("/?token=")[0]
    token = arg.split("/?token=")[1]

    xsrf = get_server_xsrf_cookie(hostname, token)

    kernel = createNewKernel(hostname, token, xsrf)
    kernel_id = kernel.id
    print(kernel_id)
    
    
    
    #executeCode(hostname,"print('Hello World')", kernel_id, xsrf, token)
    