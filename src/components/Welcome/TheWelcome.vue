<script setup lang="ts">
	import LoginButtonVue from '@/components/utilComponents/LoginButton.vue';
	import heroImage from '@/assets/images/movie-theater.jpg';
	import {useAuth0} from '@auth0/auth0-vue';

	const {isAuthenticated, user} = useAuth0();
</script>


<template>
	<div class='welcome'>
		<article>
			<div v-if='isAuthenticated'>
				<h2>Velkommen {{user?.name}}</h2>
				<RouterLink to="/video" class='videoLink'>
					Klikk <span class='specificVideoLink'>her</span> for å gå til videosiden
				</RouterLink>
				<br><br>
				<RouterLink to="/profile" class='profileLink'>Gå til Profil</RouterLink>
			</div>

			<div v-else>
				<h2>Velkommen til VideoRR</h2>
				<p class='loginText'>Logg inn for å se videoer</p>
				<LoginButtonVue />
			</div>
		</article>
		<img :src='heroImage' alt='' />
	</div>
</template>


<style scoped lang="scss">
	.welcome {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 48px;
		padding-bottom: 48px;

		@media (max-width: 768px) {
			padding-top: 16px;
			padding-bottom: 16px;
		}

		article {
			display: flex;
			align-items: center;
			justify-content: center;
			color: var(--primary-text-color);
			text-align: center;
			margin-right: 16px;
			width: 50%;

			h2 {
				font-size: var(--bigTitleSize);
				margin-bottom: 8px;
			}

			.videoLink, .loginText {
				font-size: 20px;
				margin-bottom: 20px;

				.specificVideoLink {
					font-weight: bold;
					text-decoration: underline;
				}
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

		@media (max-width: 560px) {
			flex-direction: column-reverse;

			article {
				width: 100%;
				margin-right: 0;
				margin-bottom: 16px;
			}

			img {
				width: 100vw;
				height: 150px;
				aspect-ratio: 21/9;
				border-radius: 0;
				margin: -32px;
				margin-bottom: 16px;
			}
		
		}
	}
</style>
