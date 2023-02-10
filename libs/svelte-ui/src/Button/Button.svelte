<script>
  export let label = 'Svelte Button';
  export let onClick = () => {};
</script>

<button on:click={onClick}>
  {label}
</button>

<style>
  button {
    background: #84BD01;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  button:hover {
    background: #6b9b00;
  }

  button:focus {
    outline: none;
  }
</style>
