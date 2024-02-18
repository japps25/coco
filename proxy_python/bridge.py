import zmq

context = zmq.Context()

# This is where the weather server sits
frontend = context.socket(zmq.SUB)
frontend.connect("tcp://192.168.55.210:5556")

# This is our public endpoint for subscribers
backend = context.socket(zmq.PUB)
backend.bind("tcp://127.0.0.1:53435")

# Subscribe on everything
frontend.setsockopt(zmq.SUBSCRIBE, b'')


# Shunt messages out to our own subscribers
while True:
    # Process all parts of the message
    message = frontend.recv_multipart()
    print(message)
    backend.send_multipart(message)
