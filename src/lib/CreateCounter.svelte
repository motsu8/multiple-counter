<script lang="ts">
	import Counter from '../lib/Counter.svelte';

	type Counter = {
		id: number;
		count: number;
		title: string;
	};

	let counters: Counter[] = [{ id: 1, count: 0, title: 'title' }];
	const handleClick = () => {
		counters = counters.concat({
			id: counters.length + 1,
			count: 0,
			title: 'title'
		});
	};
</script>

<div class="space-y-2">
	{#each counters as counter}
		<Counter {...counter} bind:title={counter.title} bind:count={counter.count} />
	{/each}
</div>

<button on:click={handleClick}> Add Counter </button>

{#each counters as counter}
	<p>{counter.title}</p>
{/each}
