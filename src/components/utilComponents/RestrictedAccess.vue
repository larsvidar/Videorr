<script setup lang='ts'>
	import {useAuth0} from '@auth0/auth0-vue';
	import LoginButton from './LoginButton.vue';
	const {isAuthenticated, isLoading} = useAuth0();

</script>

<template>
	<div v-if='isLoading'>
		<p>Loading...</p>
	</div>

	<div v-else>
		<slot v-if='isAuthenticated'></slot>
		<div v-if='!isAuthenticated'>
			<p>You do not have access to this page!</p>
			<LoginButton />
		</div>
	</div>
</template>