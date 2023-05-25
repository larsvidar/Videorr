<script setup lang='ts'>
	import {useAuth0} from '@auth0/auth0-vue';
	import TheHeader from './components/TheHeader.vue';
	import TheFooter from './components/TheFooter.vue';

	const {logout} = useAuth0();

</script>


<template>
	<div class='appContainer'>
		<div class='appContent'>
			<TheHeader />

			<main>
				<RouterView />
			</main>

			<TheFooter />
		</div>
	</div>
</template>


<style scoped lang="scss">
	.appContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;

		.appContent {
			display: flex;
			flex-direction: column;
			background-color: var(--color-background);
			width: 1000px;
			padding: 1rem 2rem;

			main {
				padding: 2rem 0;
			}
		}
	}
</style>
