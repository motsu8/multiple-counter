<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let count: number = 0;
	export let title: string;
	export let id: number;

	const dispatch = createEventDispatcher();

	const increment = () => (count = count + 1);
	const decrement = () => (count = count - 1);
	const reset = () => (count = 0);
	const deleteCounter = () => {
		dispatch('delete', { id });
	};
</script>

<div class="bg-neutral-100 px-3 py-1 relative flex justify-between rounded shadow-xl">
	<input type="text" bind:value={title} class="pl-2 my-2 w-32 text-neutral-400" />
	<p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold">
		{count}
	</p>
	<div class="flex text-white">
		<button on:click={increment} class="bg-red-400 rounded-l min-w-max px-3 py-1 text-lg">+</button>
		<button on:click={decrement} class="bg-blue-400 min-w-max px-3 py-1 text-lg">-</button>
		<button on:click={reset} class="bg-yellow-400 rounded-r px-3 py-1 text-lg font-bold">0</button>
		<button on:click={deleteCounter} class="text-gray-400 px-3 py-1 text-lg">x</button>
	</div>
</div>
