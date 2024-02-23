<script lang="ts">
  import type { NodeProps } from "@xyflow/svelte";
  import { COMMANDS } from "../common";

  type $$Props = NodeProps;

  const commands = Object.entries(COMMANDS).map(([command, name]) => ({ command, name }));
</script>

<div class="command-menu-container">
  <select>
    {#each commands as command}
      <option value={command.command}>{command.name}</option>
    {/each}
  </select>
</div>

<style>
  .command-menu-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
