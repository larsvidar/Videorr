<script lang='ts'>
	import {useAuth0} from '@auth0/auth0-vue';

	export default {
		setup() {
			const { user, isAuthenticated } = useAuth0();
			console.log({ user: user.value, isAuthenticated: isAuthenticated.value });

			return {
				user,
				isAuthenticated,
			};
		},
	};
</script>


<template>
	<main>
		<h2>Du er logget inn!</h2>
		<pre>
			<code>{{ user }}</code>
			<code>{{ isAuthenticated }}</code>
		</pre>
	</main>
</template>