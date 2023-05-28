<script setup lang="ts">
	import {useAuth0} from '@auth0/auth0-vue';
	import TheButton from './TheButton.vue';

	const {loginWithRedirect: loginWithRedirect, logout, isAuthenticated} = useAuth0();
	const handleLogin = () => loginWithRedirect();
</script>

<template>
	<TheButton v-if='!isAuthenticated' :click="handleLogin">Logg inn</TheButton>
	<TheButton v-if='isAuthenticated' :click="logout">Log out</TheButton>
</template>
