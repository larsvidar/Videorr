<script setup lang='ts'>
	import {useAuth0} from '@auth0/auth0-vue';
	import TheButton from './TheButton.vue';

	const {logout} = useAuth0();
</script>


<template>
	<header>
		<RouterLink to='/'>
			<img alt='logo' class='logo' src='@/assets/logo.png' />
		</RouterLink>

		<div class='headline'>
			<RouterLink to='/'>
				<h1>VideoSite</h1>
			</RouterLink>
			<p>&nbsp; - View your video files in your browser</p>
		</div>

		<TheButton :click='logout'>Logout</TheButton>
	</header>
</template>


<style scoped lang='scss'>
	header {
		display: flex;
		align-items: center;
		background: #9fccff;
		margin: -1rem -2rem;
		padding: 1rem 2rem;

		.logo {
			height: 50px;
			margin-right: 2rem;
		}

		.headline {
			display: flex;
			align-items: center;

			a {
				h1 {
					font-size: 2rem;
				}

				&:hover {
					text-decoration: none;
				}
			}

			p {
				font-size: 1rem;
			}
		}

		button {
			margin-left: auto;
		}
	}
</style>
