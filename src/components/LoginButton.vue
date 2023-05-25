<script setup lang="ts">
	import {useAuth0} from '@auth0/auth0-vue';
	import TheButton from './TheButton.vue';

	const {loginWithRedirect: login, logout, isAuthenticated} = useAuth0();
</script>

<template>
	<TheButton v-if='!isAuthenticated' :click="login">Log in</TheButton>
	<TheButton v-if='isAuthenticated' :click="logout">Log out</TheButton>
</template>
