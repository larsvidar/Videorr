<script setup lang='ts'>
	import ProfileImage from './ProfileImage.vue';
	import {store} from '@/states/store';

	const {user} = store();
</script>


<template>
	<div v-if='user'>
		<h2>{{ user.fullName || user.username || user.email }}</h2>
		<div class='userCard'>
			<ProfileImage :src='user.thumbnail' />
			<div class='userInfo'>
				<p>Brukernavn: {{ user.username }}</p>
				<p>Epost: {{ user.email }}</p>
				<p>Tjeneste: {{ user.service }}</p>
			</div>
		</div>
	</div>
	<div v-else>
		<h2>Ingen bruker funnet!</h2>
	</div>
</template>


<style scoped lang='scss'>
	h2 {
		margin-bottom: 16px;
	}

	.userCard {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		.userInfo {
			display: flex;
			flex-direction: column;
		}
	}
</style>