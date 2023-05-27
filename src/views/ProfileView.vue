<script setup lang='ts'>
	import {useAuth0} from '@auth0/auth0-vue';
	import RestrictedAccess from '@/components/RestrictedAccess.vue';
	import { formatUser } from '@/utils/userHandler';

	const {user: rawUser} = useAuth0();
	const user = formatUser(rawUser.value);

	const capitalize = (str?: string) => {
		if(typeof str !== 'string') return '';
		const upperCaseString = str.charAt(0).toUpperCase() + str.slice(1);
		return upperCaseString;
	};
</script>


<template>
	<RestrictedAccess>
		<main v-if='user'>
			<h2>{{user.fullName || user.username || user.email}}</h2>
			<div class='userCard'>
				<img v-if='user.thumbnail' :src='user.thumbnail' :alt='user.username' />
				<div class='userInfo'>
					<p>Brukernavn: {{user.username}}</p>
					<p>Epost: {{user.email}}</p>
					<p>Tjeneste: {{capitalize(user.service)}}</p>
				</div>
			</div>
		</main>
		<main v-else>
			<h2>Ingen bruker funnet!</h2>
		</main>
	</RestrictedAccess>
</template>


<style scoped lang='scss'>


	.userCard {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		img {
			width: 100px;
			height: 100px;
			border-radius: 50%;
			margin-right: 24px;
		}

		.userInfo {
			display: flex;
			flex-direction: column;
		}
	}

</style>