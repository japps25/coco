<script lang="ts">
  import { Handle, Position, type NodeProps } from "@xyflow/svelte";
  import { onMount } from "svelte";
  import Icon from "./Icon.svelte";
  import { python } from "@codemirror/lang-python";

  // @ts-ignore
  import CodeMirror from "svelte-codemirror-editor";

  // @ts-ignore
  const api = window.cocoServerApi as any;

  // Function to generate a unique ID
  function generateUniqueId() {
    return `editor-node-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  let nodeId = generateUniqueId(); // Generate a unique ID for this editor node

  let output = "";
  const pubCallback = (msg: any) => {
    // Check if msg.content is an array
    if (Array.isArray(msg.content)) {
      // Iterate over each item in the array
      msg.content.forEach((item) => {
        if (item.text) {
          output += item.text;
        }
        if (item.data && item.data["text/plain"]) {
          output += item.data["text/plain"];
        }
      });
    } else {
      if (msg.content.text) {
        output += msg.content.text;
      }
      if (msg.content.data && msg.content.data["text/plain"]) {
        output += msg.content.data["text/plain"];
      }
    }
  };

  onMount(async () => {
    // Connect to a Jupyter server.
    api.connectToJupyter("http://localhost:8888/?token=db2ba8cd1e3ef16d23bb3505e37ec654acf20b91ef3e1010");
    await api.startKernel();
    // Set the callback for this editor node
    api.setPubCallback(nodeId, pubCallback);
  });

  type $$Props = NodeProps;

  export let isConnectable: $$Props["isConnectable"];
  let cellName = "";
  let show = true;
  let value = "print('Hello Coco!')";

  const toggleShow = (): void => {
    show = !show;
  };

  const handleRun = (): void => {
    output = "";
    api.runCode(nodeId, value);
  };

  const handleClear = (): void => {
    value = "";
  };

  const handleDelete = (): void => {
    console.log("delete");
  };
</script>

<Handle type="target" position={Position.Left} style="" {isConnectable} />
<div class="coco-editor__cell-wrapper">
  <div class="coco-editor__header">
    <span class="coco-editor__cell-core">
      {#if show}
        <button class="icon-wrapper" on:click={toggleShow}>
          <Icon name="chevron-down" />
        </button>
      {:else}
        <button class="icon-wrapper" on:click={toggleShow}>
          <Icon name="chevron-right" />
        </button>
      {/if}
      <input
        type="text"
        bind:value={cellName}
        placeholder="New Cell"
        class="coco-editor__cell-name"
        on:keydown={(e) => e.stopPropagation()}
      />
    </span>

    {#if show}
      <span class="coco-editor__cell-buttons">
        <button class="icon-wrapper" on:click={handleRun}>
          <Icon name="play" />
        </button>
        <button class="icon-wrapper" on:click={handleClear}>
          <Icon name="broom" />
        </button>
        <button class="icon-wrapper" on:click={handleDelete}>
          <Icon name="trash" />
        </button>
      </span>
    {/if}
  </div>

  {#if show}
    <div class="editor" on:keydown={(e) => e.stopPropagation()}>
      <CodeMirror
        bind:value
        lang={python()}
        styles={{
          "&": {
            width: "100%",
            maxWidth: "100%",
            height: "100%",
          },
        }}
      />
    </div>
    <div id="output">
      <textarea
        id="output"
        rows="10"
        cols="50"
        value={output}
        style="background-color: #1e1e1e; color: #fff; border: none; outline: none; resize: none; width: 100%; height: 100%;"
        readonly
      ></textarea>
    </div>
  {/if}
</div>
<Handle type="source" position={Position.Left} />

<style>
  .coco-editor__cell-wrapper {
    display: flex;
    flex-direction: column;
    background-color: #1e1e1e;
    border-radius: 0.4rem;
    overflow: hidden;
  }

  .coco-editor__header {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #2d2d2d;
  }

  .coco-editor__cell-core {
    display: flex;
  }

  .coco-editor__cell-name {
    background-color: transparent;
    border: none;
    border-radius: 0.4rem;
    outline: none;
    color: rgb(164, 156, 144);
    font-family: monospace;
    font-size: 1.2rem;
    font-weight: 500;
    margin-right: 1.5rem;
    padding: 0.4rem;
  }

  .coco-editor__cell-name:hover {
    cursor: pointer;
    background-color: #3d3d3d;
  }

  .coco-editor__cell-buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .icon-wrapper {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0rem;
    margin: 0rem;
  }
</style>
