<script lang="ts">
    import { Handle, Position, type NodeProps } from '@xyflow/svelte';
    import CodeMirror from "svelte-codemirror-editor";
    import Icon from "./Icon.svelte";
    import { trapFocus } from "./actions";
    import { python } from "@codemirror/lang-python"
    type $$Props = NodeProps;
  
    export let data: $$Props['data'];
    export let isConnectable: $$Props['isConnectable'];
  
    const { color } = data;

    const toggleShow = (): void => {
        show = !show;
    };

    const handleRun = (): void => {
        console.log("run");
    };

    const handleClear = (): void => {
        value = "";
    };

    const handleDelete = (): void => {
        console.log("delete");
    };


    let cellName = "New Cell";
    let show = true;
    let value = "import pandas as pd\nimport numpy as np\n\nprint('Hello World')";
  </script>
  
  <Handle type="target" position={Position.Left} style="background: #555;" {isConnectable} />
  <div class="editor-wrapper">
    <div class="header">
      {#if show}
        <button class="icon-wrapper" on:click={toggleShow}>
          <Icon name="chevron-down" />
        </button>
      {:else}
        <button class="icon-wrapper" on:click={toggleShow}>
          <Icon name="chevron-right" />
        </button>
      {/if}

      <input type="text" bind:value={cellName} placeholder="New Cell" class="cell-name" />

      {#if show}
        <span class="buttons">
          <button class="icon-wrapper" on:click={handleRun}>
            <Icon name="gear" />
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
      <div class="editor" use:trapFocus>
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
    {/if}
  </div>
  
  <Handle
    type="source"
    position={Position.Right}
    id="a"
    style="top: 10px; background: #555;"
    {isConnectable}
  />
  <Handle
    type="source"
    position={Position.Right}
    id="b"
    style="bottom: 10px; top: auto; background: #555;"
    {isConnectable}
  />
  
  <style>
    :global(.svelte-flow__node-selectorNode) {
      font-size: 12px;
      background: #eee;
      border: 1px solid #555;
      border-radius: 5px;
      text-align: center;
    }
  </style>
  