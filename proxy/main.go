package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
)

type Kernel struct {
	Id             string `json:"id"`
	Name           string `json:"name"`
	LastActivity   string `json:"last_activity"`
	ExecutionState string `json:"execution_state"`
	Connections    int    `json:"connections"`
}

type KernelSpec struct {
	Default string
}

type Options struct {
	Name string
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
		return fmt.Errorf("server returned non-200 status: %s", resp.Status)
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

// get kernel specs
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

// func main() {
// 	hostname := strings.Split(os.Args[1], "/?token=")[0]
// 	token := strings.Split(os.Args[1], "/?token=")[1]

// 	cookie, err := GetServerXSRFCookie(hostname, token)
// 	if err != nil {
// 		fmt.Println(err)
// 		os.Exit(1)
// 	}

// 	var kernel Kernel
// 	err = CreateNewKernel(hostname, token, cookie, &kernel)
// 	if err != nil {
// 		fmt.Println(err)
// 		os.Exit(1)
// 	}

// 	fmt.Println(kernel.Id)

// 	err = GetKernelSpecs(hostname, token, cookie)
// 	if err != nil {
// 		fmt.Println(err)
// 		os.Exit(1)
// 	}
// }
