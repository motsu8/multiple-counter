<script lang="ts">
	import CreateCounter from '../lib/CreateCounter.svelte';
</script>

<h1>Multiple Counter</h1>
<CreateCounter />

<style>
	:global(body) {
		width: 100%;
		height: 100%;
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
