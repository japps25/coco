<script lang="ts">
  // import { SvelteFlowProvider } from "@xyflow/svelte";
  // import Flow from "./Flow.svelte";

  import { KernelManager } from "./jupyter-services/kernel/manager";

  const address = "http://localhost:8888/?token=1f5865ed1f7807fad2108f5167e7d9f1aa16dd424c941e64";

  // Define the URL of the Jupyter server
  const serverSettings = {
    baseUrl: address.split("/?token=")[0],
    token: address.split("/?token=")[1],
  };

  // Define the ID of the kernel you want to connect to
  const kernelId: string = "66806986-1fc0-437b-b273-ee52a8e9ffa3"; // Replace with your kernel ID

  const manager = new KernelManager(serverSettings as IOptions);

  manager.connectTo(kernelId).requestExecute({ code: "a = 1" });

  // session.connectTo({ id: kernelId } as IOptions);

  // let future = session.connectTo(kernel.requestExecute({ code: "a = 1" }));

  // session.startNew;

  // console.log("Starting session");
  // session
  //   .startNew(options)
  //   .then((s) => {
  //     console.log("Session started");
  //     // Rename the session.
  //     // return s.setName("Test Session");
  //   })
  //   .then(() => {
  //     console.log(`Session renamed to ${session.name}`);
  //     // Execute and handle replies on the kernel.
  //     let future = session.connectTo kernel.requestExecute({ code: "a = 1" });
  //     future.onReply = (reply: any) => {
  //       console.log("Got execute reply");
  //     };
  //     future.onDone = () => {
  //       console.log("Future is fulfilled");
  //       // Shut down the session.
  //       // session.shutdown().then(() => {
  //       //   console.log("Session shut down");
  //       //   console.log("Test Complete!");
  //       // });
  //     };
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
</script>

<div>
  <h3>App</h3>

  <h3>Kernel</h3>
</div>

<!-- <SvelteFlowProvider>
  <Flow />
</SvelteFlowProvider> -->
