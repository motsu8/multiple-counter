<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let count: number = 0;
	export let title: string = '';
	export let id: number;

	const dispatch = createEventDispatcher();

	const increment = (): number => (count = count + 1);
	const decrement = (): number => (count = count - 1);
	const reset = (): number => (count = 0);
	const deleteCounter = (): void => {
		dispatch('delete', { id });
	};
	const controlClass: string = 'min-w-max px-3 py-1 text-lg';
</script>

<div
	class="bg-neutral-100 px-3 py-1 relative flex justify-between items-center rounded shadow-xl max-w-sm m-auto"
>
	<input
		type="text"
		bind:value={title}
		placeholder={title}
		class="pl-1 my-2 w-32 text-neutral-400"
	/>
	<p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold">
		{count}
	</p>
	<div class="flex text-white">
		<button on:click={increment} class={`bg-red-400 rounded-l min-w-max ${controlClass}`}>+</button>
		<button on:click={decrement} class={`bg-blue-400 min-w-max ${controlClass}`}>-</button>
		<button on:click={reset} class={`bg-yellow-400 rounded-r font-bold ${controlClass}`}>0</button>
		<button on:click={deleteCounter} class={`text-gray-400 ${controlClass}`}>x</button>
	</div>
</div>
