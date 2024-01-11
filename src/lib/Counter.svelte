<script lang="ts">
	export let count: number = 0;
  export let title: string
	const increment = () => (count = count + 1);
	const decrement = () => (count = count - 1);
	const reset = () => count = 0;
</script>

<div>
  <input type="text" bind:value={title}>
  <p>{count}</p>
  <button on:click={increment}>+</button>
  <button on:click={decrement}>-</button>
  <button on:click={reset}>0</button>
</div>

<style>
  div{
    background-color: antiquewhite;
  }
</style>
