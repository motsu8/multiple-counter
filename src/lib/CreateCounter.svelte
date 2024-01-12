<script lang="ts">
	import Counter from '../lib/Counter.svelte';
	import type { CounterType, DeleteEvent } from '../types/counter';

	/**
	 * 初期値
	 */
	let counters: CounterType[] = [{ id: 1, count: 0, title: 'title' }];

	/**
	 * カウンター作成メソッド
	 */
	const createCounter = (): void => {
		counters = counters.concat({
			id: counters.length + 1,
			count: 0,
			title: 'title'
		});
	};

	/**
	 * カウンター削除メソッド
	 * @param e: DeleteEvent
	 */
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

	<button on:click={createCounter} class="bg-green-400 m-auto w-full max-w-sm rounded text-white">
		Add Counter
	</button>

	<p>title list: {allTitle}</p>

	<p>sum of count: {reduceCount}</p>
</div>
