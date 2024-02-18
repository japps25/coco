import zmq
from tornado import escape

kernel_id = 'e414fd10-010e-4a8d-8de2-14e007d2fe81'
iopub_port = 53812
def main():
    """ main method """

    # Prepare our context and publisher
    context = zmq.Context()
    subscriber = context.socket(zmq.SUB)
    subscriber.connect(f"tcp://127.0.0.1:{iopub_port}")
    subscriber.setsockopt(zmq.SUBSCRIBE, b"B")

    while True:
        # Read envelope with address
        data = subscriber.recv_multipart()
        print("output:", escape.json_decode(data))

    # We never get here but clean up anyhow
    subscriber.close()
    context.term()


if __name__ == "__main__":
    main()