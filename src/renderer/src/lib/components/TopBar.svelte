<script lang="ts">
  import type { ICocoServerApi } from "../common";
  import Spinner from "../utils/Spinner.svelte";
  import StatusBadge from "../utils/StatusBadge.svelte";

  // @ts-ignore
  const api = window.cocoServerApi as ICocoServerApi;

  enum ConnectionStatus {
    DISCONNECTED = "disconnected",
    CONNECTING = "connecting",
    CONNECTED = "connected",
  }

  let jupyterServerUrl: string;
  let connectionStatus = ConnectionStatus.DISCONNECTED;

  // Connect to the Jupyter server when the user presses Enter
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      connectionStatus = ConnectionStatus.CONNECTING;
      console.log(`Connecting to Jupyter server at ${jupyterServerUrl}...`);
      api.connectToJupyter(jupyterServerUrl);
      api
        .ready()
        .then(() => {
          connectionStatus = ConnectionStatus.CONNECTED;
        })
        .catch((err) => {
          console.error(err);
          connectionStatus = ConnectionStatus.DISCONNECTED;
        });
    }
  };
</script>

<div class="top-bar__main">
  <span class="top-bar__url">
    <div class="top-bar__spinner">
      {#if connectionStatus === ConnectionStatus.DISCONNECTED}
        <StatusBadge name="cross" size="1.2em" />
      {:else if connectionStatus === ConnectionStatus.CONNECTING}
        <Spinner size="0.8em" />
      {:else}
        <StatusBadge name="tick" size="1.2em" />
      {/if}
    </div>
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
    height: 2rem;
    width: 100%;
    display: flex;
  }

  .top-bar__url {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
  }

  .top-bar__spinner {
    display: inline-block;
    align-items: center;
    justify-content: center;

    margin: 0.5em 0.5em 0 0.5em;
    height: 100%;
  }

  .top-bar__url-input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 0.5em 0 0.5em;
  }
</style>
