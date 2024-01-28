<script lang="ts">
  import { Svelvet, Node, ThemeToggle } from "svelvet";
  import Cell from "./lib/components/Cell.svelte";
</script>

<body>
  <Svelvet fitView controls minimap>
    <ThemeToggle main="dark" alt="light" slot="toggle" />
    <Cell />
  </Svelvet>
</body>

<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
  }
</style>
