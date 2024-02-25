<script lang="ts">
  import Icon from "../components/Icon.svelte";

  export let name: string;
  export let size: string = "1em";
</script>

{#if name === "tick"}
  <div class="status-badge status-badge--tick" style="width: {size}; height: {size};">
    <Icon name="circle-check-regular" />
  </div>
{:else if name === "cross"}
  <div class="status-badge status-badge--cross" style="width: {size}; height: {size};">
    <Icon name="circle-xmark-regular" />
  </div>
{:else}
  <div class="status-badge status-badge--unknown" style="width: {size}; height: {size};">
    <Icon name="circle-question-regular" />
  </div>
{/if}

<style>
  .status-badge {
    /* display: inline-block; */
    display: flex;
    border-radius: 60%;
  }

  .status-badge--tick {
    background-color: #4caf50;
  }

  .status-badge--cross {
    background-color: #f44336;
  }

  .status-badge--unknown {
    background-color: #9e9e9e;
  }
</style>
