import requests
import json
import sys
from ipykernel.kernelbase import Kernel
import jupyter_client
from jupyter_client import KernelManager, BlockingKernelClient, session, AsyncKernelClient
import asyncio

class Kernel:
    def __init__(self, id, name, last_activity, execution_state, connections):
        self.id = id
        self.name = name
        self.last_activity = last_activity
        self.execution_state = execution_state
        self.connections = connections

class EchoKernel(Kernel):
    implementation = 'Echo'
    implementation_version = '1.0'
    language = 'no-op'
    language_version = '0.1'
    language_info = {'mimetype': 'text/plain'}
    banner = "Echo kernel - as useful as a parrot"

    def do_execute(self, code, silent, store_history=True, user_expressions=None,
                   allow_stdin=False):
        if not silent:
            stream_content = {'name': 'stdout', 'text': code}
            self.send_response(self.iopub_socket, 'stream', stream_content)

        return {'status': 'ok',
                # The base class increments the execution count
                'execution_count': self.execution_count,
                'payload': [],
                'user_expressions': {},
               }

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
        print(kernel)
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
    
def getSessionId():
    try:
        headers = {
            "Content-Type": "application/json"
        }
        response = requests.get(hostname + "/api/sessions", headers=headers)
        session = json.loads(response.text)
        return session
    except Exception as e:
        print(e)
        return None

 

if __name__ == '__main__':
    arg = sys.argv[1]
    hostname = arg.split("/?token=")[0]
    token = arg.split("/?token=")[1]

    xsrf = get_server_xsrf_cookie(hostname, token)

    kernel = createNewKernel(hostname, token, xsrf)
    kernel_id = kernel.id
