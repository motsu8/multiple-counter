<script lang="ts">
	import Counter from '../lib/Counter.svelte';

	type Counter = {
		id: number;
		count: number;
		title: string;
	};

	let counters: Counter[] = [{ id: 1, count: 0, title: 'title' }];

	const createCounter = (): void => {
		counters = counters.concat({
			id: counters.length + 1,
			count: 0,
			title: 'title'
		});
	};

	const deleteCounter = (e: CustomEvent<{ id: number }>): void => {
		counters = counters.filter(({ id }) => id !== e.detail.id);
	};
</script>

<div class="space-y-2 py-2">
	{#each counters as counter}
		<Counter
			{...counter}
			bind:title={counter.title}
			bind:count={counter.count}
			on:delete={deleteCounter}
		/>
	{/each}

	<button on:click={createCounter}> Add Counter </button>

	{#each counters as counter}
		<p>{counter.title}</p>
	{/each}
</div>
