<script lang="ts">
  import { SvelteFlowProvider } from "@xyflow/svelte";
  import Flow from "./Flow.svelte";
  import TopBar from "./lib/components/TopBar.svelte";
</script>

<div>
  <TopBar />
  <SvelteFlowProvider>
    <Flow />
  </SvelteFlowProvider>
</div>
