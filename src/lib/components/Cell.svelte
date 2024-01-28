<script lang="ts">
  import { Node } from "svelvet";
  import Icon from "./Icon.svelte";

  import CodeMirror from "svelte-codemirror-editor";
  import { python } from "@codemirror/lang-python";

  let cellName = "New Cell";
  let show = true;
  let value = "";
</script>

<Node position={{ x: 1090, y: 150 }}>
  <div class="editor-wrapper">
    <div class="header">
      {#if show}
        <Icon name="chevron-down" on:click={() => (show = false)} />
      {:else}
        <Icon name="chevron-right" on:click={() => (show = true)} />
      {/if}

      <input type="text" bind:value={cellName} placeholder="New Cell" class="cell-name" />

      <span class="buttons">
        <Icon name="gear" />
        <Icon name="broom" on:click={() => (value = "")} />
        <Icon name="trash" />
      </span>
    </div>

    {#if show}
      <div class="editor">
        <CodeMirror
          bind:value
          lang={python()}
          styles={{
            "&": {
              width: "500px",
              maxWidth: "100%",
              height: "50rem",
            },
          }}
        />
      </div>
    {/if}
  </div>
</Node>

<style>
  .editor-wrapper {
    display: flex;
    flex-direction: column;
    /* width: 500px;
    height: 50rem; */
    background-color: #1e1e1e;
    border-radius: 8px;
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
    outline: none;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    margin-left: 1rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
</style>
