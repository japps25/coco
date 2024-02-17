package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"os/exec"
	"strings"
	"time"

	"github.com/go-zeromq/zmq4"
)

type Kernel struct {
	Id             string `json:"id"`
	Name           string `json:"name"`
	LastActivity   string `json:"last_activity"`
	ExecutionState string `json:"execution_state"`
	Connections    int    `json:"connections"`
}

func GetServerXSRFCookie(hostname string, token string) (string, error) {
	// Do a get request to the server to get the server's public key
	resp, err := http.Get(hostname + "/?token=" + token)
	if err != nil {
		return "", err
	}

	if resp.StatusCode != 200 {
		return "", fmt.Errorf("server returned non-200 status: %s", resp.Status)
	}

	for _, cookie := range resp.Header.Values("Set-Cookie") {
		if strings.HasPrefix(cookie, "_xsrf=") {
			return strings.Split(strings.Split(cookie, ";")[0], "=")[1], nil
		}
	}

	return "", fmt.Errorf("no _xsrf cookie found")
}

func CreateNewKernel(hostname string, token string, cookie string, kernel *Kernel) error {

	body := `{"name": "python3", "path": ""}`

	// Do a get request to the server to get the server's public key
	req, err := http.NewRequest("POST", hostname+"/api/kernels", strings.NewReader(body))
	if err != nil {
		return err
	}

	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("Authorization", "token "+token)
	req.Header.Add("X-XSRFToken", "_xsrf="+cookie)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return err
	}

	if resp.StatusCode != 201 {
		return fmt.Errorf("server returned non-201 status: %s", resp.Status)
	}

	bodyBytes := make([]byte, 2000)
	n, _ := resp.Body.Read(bodyBytes)
	bodyBytes = bodyBytes[:n]

	err = json.Unmarshal(bodyBytes, &kernel)
	if err != nil {
		return err
	}

	return nil
}

func GetKernelSpecs(hostname string, token string, cookie string) error {

	req, err := http.NewRequest("GET", hostname+"/api/kernelspecs", nil)
	if err != nil {
		return err
	}

	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("Authorization", "token "+token)
	req.Header.Add("X-XSRFToken", "_xsrf="+cookie)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return err
	}

	if resp.StatusCode != 200 {
		return fmt.Errorf("server returned non-200 status: %s", resp.Status)
	}

	bodyBytes := make([]byte, 2000)
	n, _ := resp.Body.Read(bodyBytes)
	bodyBytes = bodyBytes[:n]

	fmt.Println(string(bodyBytes))

	return nil
}

func Run() error {

	ctx := context.Background()
	socket := zmq4.NewReq(ctx, zmq4.WithDialerRetry(time.Second))
	defer socket.Close()

	fmt.Printf("Connecting to hello world server...")
	if err := socket.Dial("tcp://localhost:8888"); err != nil {
		return fmt.Errorf("dialing: %w", err)
	}

	// // Subscribe to all messages on the IOPub socket
	// iopubSocket.SetSubscribe("")

	// // Prepare the execute request
	// executeRequest := map[string]interface{}{
	// 	"header": map[string]interface{}{
	// 		"msg_id":   "<UUID>",
	// 		"msg_type": "execute_request",
	// 	},
	// 	"metadata": map[string]interface{}{},
	// 	"content": map[string]interface{}{
	// 		"code":             "print('Hello from Jupyter!')",
	// 		"silent":           false,
	// 		"store_history":    true,
	// 		"user_expressions": map[string]interface{}{},
	// 		"allow_stdin":      true,
	// 	},
	// }

	// // Serialize the execute request
	// executeRequestBytes, err := json.Marshal(executeRequest)
	// if err != nil {
	// 	panic(err)
	// }

	// // Send the execute request
	// _, err = shellSocket.SendMessage(executeRequestBytes)
	// if err != nil {
	// 	panic(err)
	// }

	// // Receive and handle messages from the IOPub socket
	// for {
	// 	message, err := iopubSocket.RecvMessage(0)
	// 	if err != nil {
	// 		panic(err)
	// 	}

	// 	// Process the message
	// 	switch message {
	// 	case "execute_result":
	// 		// Handle the result
	// 		fmt.Println("Execution result received: ", string(message))
	// 	case "stream":
	// 		// Handle stream content
	// 		fmt.Println("Stream content: ", string(message))
	// 	case "error":
	// 		// Handle errors
	// 		fmt.Println("Error occurred during execution: ", string(message))
	// 	default:
	// 		fmt.Println("Unknown message type: ", message)
	// 	}
	// }

	return nil
}

func main() {
	// var err error
	// hostname := strings.Split(os.Args[1], "/?token=")[0]
	// token := strings.Split(os.Args[1], "/?token=")[1]

	// cookie, err := GetServerXSRFCookie(hostname, token)
	// if err != nil {
	// 	fmt.Println(err)
	// 	os.Exit(1)
	// }

	// var kernel Kernel
	// err = CreateNewKernel(hostname, token, cookie, &kernel)
	// if err != nil {
	// 	fmt.Println(err)
	// 	os.Exit(1)
	// }

	// fmt.Println("Kernel created: ", kernel)

	// err = Run()
	// if err != nil {
	// 	fmt.Println(err)
	// }

	// run a simple python script
	cmd := exec.Command("python")
	cmd.Stdout = os.Stdout
	stdin, err := cmd.StdinPipe()
	if err != nil {
		fmt.Println(err)
	}

	err = cmd.Start()
	if err != nil {
		fmt.Println(err)
	}

	stdin.Write([]byte("print('Hello from Go!')"))

	// err = cmd.Wait()
	// if err != nil {
	// 	fmt.Println(err)
	// }

	// cmd.Stdin.Read([]byte("print('Hello from Go!')"))

}
