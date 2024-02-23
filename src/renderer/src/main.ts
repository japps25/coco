import App from "./App.svelte";

import "./app.css";

// const app = new App({
//   target: document.getElementById("app")!,
// });

// export default app;

type CocoServerApi = {
  kernel: any;
  kernalManager: any;
};

const textAreaCode = document.getElementById("code") as HTMLTextAreaElement;
const runButton = document.getElementById("run") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLDivElement;

const api = (await window.cocoServerApi) as CocoServerApi;

const kernel = api.kernel;

runButton.addEventListener("click", async () => {
  console.log(window);
  console.log(api);
  // const code = textAreaCode.value;
  // const result = await kernel.requestExecute({ code: code });
  // let future = result.data["text/html"];

  // future.onIOPub = function (msg) {
  //   console.log(msg.content);
  //   output.innerHTML = msg.content.text;
  // };
});
