<script setup lang="ts">
	import { store } from '@/states/store';
	import LoginButtonVue from './LoginButton.vue';
	const {user} = store();
	console.log(user);
</script>

<template>
	<div v-if='user'>
		<div>
			<h2>Velkommen {{ user.fullName }}</h2>
			<RouterLink to="/video">Klikk her for å se videoer</RouterLink>
		</div>
		<br><br>
		<RouterLink to="/profile">Profile</RouterLink>
	</div>
	<div v-else>
		<h2>Velkommen til Videorr</h2>
		<p>Logg inn for å se videoer</p>
		<LoginButtonVue />
	</div>
</template>


<style scoped lang="scss">
	main {
		color: var(--primary-text-color);
		padding: var(--main-padding);
		background-color: white;

		h2 {
			font-size: 48px;
			margin-bottom: 8px;
		}

		a {
			font-size: 20px;
		}
	}
</style>
