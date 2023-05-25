<script setup lang="ts">
	import {useAuth0} from '@auth0/auth0-vue';
	import TheButton from './TheButton.vue';

	const {loginWithRedirect: login} = useAuth0();
</script>

<template>
	<TheButton :click="login">Log in</TheButton>
</template>
