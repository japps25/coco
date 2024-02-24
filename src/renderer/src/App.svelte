<script lang="ts">
  import { SvelteFlowProvider } from "@xyflow/svelte";
  import Flow from "./Flow.svelte";

  let jupyterServerUrl: string;
</script>

<SvelteFlowProvider>
  <Flow />
</SvelteFlowProvider>
