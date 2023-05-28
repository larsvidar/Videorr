<script setup lang='ts'>
	import TheContainer from '../utilComponents/TheContainer.vue';
</script>

<template>
	<footer>
		<TheContainer>
			<p>© 2023 - Videorr</p>
		</TheContainer>
	</footer>
</template>

<style scoped lang='scss'>
	footer {
		border-top: solid 1px var(--borderColor);

		.container {
			display: flex;
			align-items: center;
			justify-content: center;
			background: #9fccff;
			padding: var(--main-padding);
		}
	}
</style>