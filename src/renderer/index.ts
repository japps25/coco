const textAreaCode = document.getElementById("code") as HTMLTextAreaElement;
const runButton = document.getElementById("run") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLDivElement;

const api = window.cocoServerApi as any;
const pubCallback = (msg: any) => {
  console.log(msg.content);
  if (msg.content.text) {
    output.innerHTML = msg.content.text;
  }
};

api.setPubCallback(pubCallback);

runButton.addEventListener("click", async () => {
  api.runCode(textAreaCode.value);
});
