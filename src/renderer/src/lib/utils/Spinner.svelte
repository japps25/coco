<script>
  export let size = "1em"; // Default size, can be overridden
  export let spinnerColor = "#09d3ac"; // Default color, can be overridden
</script>

<div
  class="spinner"
  style="border-width: 4px; border-color: rgba(0, 0, 0, 0.1); width: {size}; height: {size}; border-left-color: {spinnerColor};"
></div>

<style>
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    animation: spin 1s ease infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
