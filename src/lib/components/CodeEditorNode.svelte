<script lang="ts">
    import { Handle, Position, type NodeProps } from '@xyflow/svelte';
    import CodeMirror from "svelte-codemirror-editor";
    import Icon from "./Icon.svelte";
    import { trapFocus } from "./actions";
    import { python } from "@codemirror/lang-python"
    type $$Props = NodeProps;
  
    export let isConnectable: $$Props['isConnectable'];
  

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
  
 
  <style>
    .editor-wrapper {
    display: flex;
    flex-direction: column;
    background-color: #1e1e1e;
    border-radius: 0.4rem;
    overflow: hidden;
  }

  .header {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #2d2d2d;
    border-bottom: 1px solid #3d3d3d;
  }

  .cell-name {
    background-color: transparent;
    border: none;
    border-radius: 0.4rem;
    outline: none;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    margin-left: 1rem;
    padding: 0.4rem;
  }

  .cell-name:hover {
    cursor: pointer;
    background-color: #3d3d3d;
  }

  .buttons {
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
  