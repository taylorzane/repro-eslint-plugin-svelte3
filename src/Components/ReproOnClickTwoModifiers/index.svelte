<script>
  let a = 'true'
</script>

<style type="text/scss">
  .repro {
    height: calc(100vh - 30px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 90%;
    line-height: 1.618;

    :global(button) {
      background: #1fc5a0;
      color: white;
      border: 1px solid transparent;
      border-radius: 2px;
      outline: none;
      padding: 0.5rem;
      font-size: 90%;

      &:active {
        background: hsl(167, 73%, 40%);
        color: #dedede;
      }
    }
  }
</style>

<div class="repro">
  <h1>Repro</h1>
  <button on:click|once|preventDefault={alert}>
    {a}
  </button>
</div>
