<script>
  export let label = 'Svelte Button';
  export let onClick = () => {};
  export let style = '';
  export let disabled = false;
</script>

<button on:click={onClick} class={style} disabled={disabled}>
  {label}
</button>
