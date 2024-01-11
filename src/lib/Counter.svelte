<script lang="ts">
	export let count: number = 0;
	export let title: string;
	const increment = () => (count = count + 1);
	const decrement = () => (count = count - 1);
	const reset = () => (count = 0);
</script>

<div class="bg-neutral-100 px-3 py-2 flex space-x-3">
	<input type="text" bind:value={title} class="" />
	<p>{count}</p>
	<div>
		<button on:click={increment}>+</button>
		<button on:click={decrement}>-</button>
		<button on:click={reset}>0</button>
	</div>
</div>
