const textAreaCode = document.getElementById("code") as HTMLTextAreaElement;
const runButton = document.getElementById("run") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLDivElement;

const api = window.cocoServerApi as any;

const pubCallback = (msg: any) => {
  // Check if msg.content is an array
  if (Array.isArray(msg.content)) {
    // Iterate over each item in the array
    msg.content.forEach(item => {
    //const formattedOutput = JSON.stringify(item, null,  2);
     //console.log(formattedOutput);
     //output.innerHTML += formattedOutput;
      if (item.text){
        output.innerHTML += item.text;
      }
      if (item.data && item.data["text/plain"]) {
        output.innerHTML += item.data["text/plain"];
      }
    });
  } else {
    if (msg.content.text) {
      output.innerHTML += msg.content.text;
    }
    if (msg.content.data && msg.content.data["text/plain"]) {
      output.innerHTML += msg.content.data["text/plain"];
    }
  }
};

api.setPubCallback(pubCallback);

runButton.addEventListener("click", async () => {
  // Assuming api.runCode is asynchronous and returns a promise
  try {
    const msg = await api.runCode(textAreaCode.value); // Await the promise
    // If you need to manually trigger pubCallback with the result, you can do so here
    // However, since you've already set pubCallback as the callback for onIOPub, it should be called automatically
  } catch (error) {
    console.error("Error running code:", error);
  }
});
