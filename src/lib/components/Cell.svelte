<script lang="ts">
  import { Node } from "svelvet";

  import CodeMirror from "svelte-codemirror-editor";
  import { python } from "@codemirror/lang-python";

  let cellName = "New Cell";
  let value = "";
</script>

<Node position={{ x: 1090, y: 150 }}>
  <div class="editor-wrapper">
    <div class="header">
      <icon name="hide-show" size="1.5rem" />
      <input type="text" bind:value={cellName} placeholder="New Cell" class="cell-name" />

      <span class="buttons">
        <button class="button">Run</button>
        <button class="button">Clear</button>
        <button class="button">Delete</button>
      </span>
    </div>
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
</Node>

<style>
  .editor-wrapper {
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 50rem;
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
</style>
