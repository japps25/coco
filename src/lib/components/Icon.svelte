<script>
  export let className = "";
  export let name = "";
</script>

{#if name === "broom"}
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
    ><!--!Font
  Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License -
  https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
    <path
      d="M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6v29.1L364.3 320h29.1c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z"
    />
  </svg>
{:else if name === "chevron-down"}
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
    ><!--!Font
  Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License -
  https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
    <path
      d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
    />
  </svg>
{:else if name === "chevron-right"}
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
    ><!--!Font
  Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License -
  https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
    <path
      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
    />
  </svg>
{:else if name === "gear"}
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
    ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
      d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
    /></svg
  >
{:else if name === "trash"}
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
    ><!--!Font
  Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License -
  https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
    <path
      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
    />
  </svg>
{/if}

<style>
  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #2d2d2d;
    color: white;
    margin-right: 0.5rem;
  }

  .icon svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .icon[disabled] {
    opacity: 0.5;
  }

  .icon[disabled] svg {
    fill: white;
  }

  .icon[disabled]:hover {
    cursor: not-allowed;
  }

  .icon:hover {
    cursor: pointer;
    background-color: #3d3d3d;
  }

  .icon:hover svg {
    fill: white;
  }

  .icon[disabled]:hover {
    cursor: not-allowed;
  }

  .icon[disabled]:hover svg {
    fill: white;
  }

  .icon[disabled]:hover {
    cursor: not-allowed;
  }

  .icon[disabled]:hover svg {
    fill: white;
  }

  .icon[disabled]:hover {
    cursor: not-allowed;
  }

  .icon[disabled]:hover svg {
    fill: white;
  }

  .icon[disabled]:hover {
    cursor: not-allowed;
  }

  .icon[disabled]:hover svg {
    fill: white;
  }

  .icon[disabled]:hover {
    cursor: not-allowed;
  }

  .icon[disabled]:hover svg {
    fill: white;
  }

  .icon[disabled]:hover {
    cursor: not-allowed;
  }

  .icon[disabled]:hover svg {
    fill: white;
  }

  .icon[disabled]:hover {
    cursor: not-allowed;
  }

  .icon[disabled]:hover svg {
    fill: white;
  }

  .icon[disabled]:hover {
    cursor: not-allowed;
  }

  .icon[disabled]:hover svg {
    fill: white;
  }
</style>
