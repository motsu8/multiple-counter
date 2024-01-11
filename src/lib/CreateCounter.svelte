<script lang="ts">
	import Counter from '../lib/Counter.svelte';

	type Counter = {
		id: number;
		count: number;
		title: string;
	};
	type DeleteEvent = CustomEvent<{ id: number }>;

	let counters: Counter[] = [{ id: 1, count: 0, title: 'title' }];

	const createCounter = (): void => {
		counters = counters.concat({
			id: counters.length + 1,
			count: 0,
			title: 'title'
		});
	};

	const deleteCounter = (e: DeleteEvent): void => {
		counters = counters.filter(({ id }) => id !== e.detail.id);
	};

	/**
	 * reactive
	 */
	$: reduceCount = counters.reduce((total, current) => {
		return total + current.count;
	}, 0);

	$: allTitle = counters.reduce((string, current, index) => {
		if (index === counters.length - 1) return `${string}${current.title}`;
		else return `${string}${current.title}, `;
	}, '');
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

	<p>title list: {allTitle}</p>

	<p>sum of count: {reduceCount}</p>
</div>
