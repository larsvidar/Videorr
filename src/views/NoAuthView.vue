<script setup lang="ts">
	import TheContainer from '@/components/utilComponents/TheContainer.vue';
</script>

<template>
	<TheContainer>
		<div class='error'>
			<h3>Feil!</h3>
			<p>
				Auth0 ser ikke ut til å være konfigurert riktig. 
				Vi kan derfor ikke logge deg inn. Prøv igjen senere ...
			</p>
			<RouterLink to="/">Tilbake til forsiden</RouterLink>
		</div>
	</TheContainer>
</template>

<style scoped lang='scss'>
	.error {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;

		h3 {
			margin-bottom: 32px;
		}

		p {
			margin-bottom: 32px;
		}
	}
</style>