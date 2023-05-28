<script setup lang='ts'>
	import TheHeader from './components/Main/TheHeader.vue';
	import TheFooter from './components/Main/TheFooter.vue';
</script>


<template>
	<div class='appContent'>
		<TheHeader />

		<main>
			<RouterView />
		</main>

		<TheFooter />
	</div>
</template>


<style scoped lang="scss">
	.appContent {
		display: flex;
		flex-direction: column;
		background-color: var(--color-background);
		width: var(--appWidth);
		overflow: auto;
	}
</style>
