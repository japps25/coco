<script>
  export let size = "36px"; // Default size, can be overridden
  export let bgColor = "#09d3ac"; // Default color, can be overridden
  export let spinnerColor = "#09d3ac"; // Default color, can be overridden
</script>

<div class="spinner"></div>

<style>
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: size;
    height: size;
    border-radius: 50%;
    border-left-color: spinnerColor;
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
