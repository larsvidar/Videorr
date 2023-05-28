<script setup lang="ts">
	import {store} from '@/states/store';
	import LoginButtonVue from './LoginButton.vue';
	import heroImage from '@/assets/images/movie-theater.jpg';
	const {user} = store();
</script>


<template>
	<div class='welcome'>
		<article>
			<div v-if='user'>
				<div>
					<h2>Velkommen {{user.fullName}}</h2>
					<RouterLink to="/video">Klikk her for å se videoer</RouterLink>
				</div>
				<br><br>
				<RouterLink to="/profile" class='profileLink'>Gå til Profil</RouterLink>
			</div>
			<div v-else>
				<h2>Velkommen til Videorr</h2>
				<p>Logg inn for å se videoer</p>
				<LoginButtonVue />
			</div>
		</article>
		<img :src='heroImage' alt='' />
	</div>
</template>


<style scoped lang="scss">
	.welcome {
		display: flex;

		article {
			display: flex;
			align-items: center;
			color: var(--primary-text-color);
			text-align: center;
			margin-right: 16px;

			h2 {
				font-size: var(--bigTitleSize);
				margin-bottom: 8px;
			}

			a {
				font-size: 20px;
			}

			p {
				margin-bottom: 20px;
			}

			.profileLink {
				font-size: 16px;
			}

		}

		img {
			width: 50%;
			height: auto;
			aspect-ratio: 4/3;
			border-radius: 8px;
			object-fit: cover;
		}
	}
</style>
