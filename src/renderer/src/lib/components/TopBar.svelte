<script lang="ts">
  import type { ICocoServerApi } from "../common";
  import Spinner from "../utils/Spinner.svelte";

  // @ts-ignore
  const api = window.cocoServerApi as ICocoServerApi;

  export let jupyterServerUrl: string;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      api.connectToJupyter(jupyterServerUrl);
      console.log(`Connecting to Jupyter server at ${jupyterServerUrl}...`);
    }
  };
</script>

<div class="top-bar__main">
  <span class="top-bar__url">
    <Spinner size="1.5em" bgColor="#09d3ac" spinnerColor="#000000" />
    <input
      class="top-bar__url-input"
      type="text"
      on:keydown={handleKeyDown}
      bind:value={jupyterServerUrl}
      placeholder="Jupyter Server URL"
    />
  </span>
</div>

<style>
  .top-bar__main {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    height: 2em;
    width: 100%;
    display: flex;
  }

  .top-bar__url {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 1em;
  }

  .top-bar__url-input {
    width: 100%;
    height: 100%;
  }
</style>
