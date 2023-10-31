<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	const paths = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Map', path: '/map' }
	];

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		{#each paths as { name, path }}
			{@const active = $page.url.pathname === path ? 'page' : null}
			{@const activeClass = $page.url.pathname === path ? 'variant-soft-primary ' : ''}
			<li>
				<a class={activeClass} aria-current={active} href={path} on:click={drawerClose}>{name}</a>
			</li>
		{/each}
	</ul>
</nav>
