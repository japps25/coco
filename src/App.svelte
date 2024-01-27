<script>
  // import { Svelvet, ThemeToggle } from "svelvet";
  // import PlanetsInFilms from "./lib/tables/Planets_in_films.svelte";
  // import Films from "./lib/tables/Films.svelte";

  import CodeMirror from "svelte-codemirror-editor";
  import { python } from "@codemirror/lang-python";

  let value = "";
</script>

<CodeMirror bind:value lang={python()} />

<!-- <body>
  <Svelvet fitView controls minimap>
    <PlanetsInFilms />
    <Films />
    <ThemeToggle main="dark" alt="light" slot="toggle" />
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
</style> -->
