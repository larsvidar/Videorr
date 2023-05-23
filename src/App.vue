<script lang='ts'>
	import {useAuth0} from '@auth0/auth0-vue';

	export default {
		setup() {
			const {logout} = useAuth0();

			return {
				logout: logout as any,
			};
		}
	};

</script>


<template>
	<div class='appContainer'>
		<div class='appContent'>
			<header>
				<img alt='logo' class='logo' src='@/assets/logo.png' />

				<div class='headline'>
					<h1>VideoSite</h1>
					<p>&nbsp; - View your video files in your browser</p>
				</div>

				<button @click='logout'>Log out</button>
			</header>

			<main>
				<RouterView />
			</main>

			<footer>
				<p>© 2021 - VideoSite</p>
			</footer>
		</div>
	</div>
</template>


<style scoped lang="scss">
	.appContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;

		.appContent {
			display: flex;
			flex-direction: column;
			background-color: var(--color-background);
			width: 1000px;
			padding: 1rem 2rem;

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

					h1 {
						font-size: 2rem;
					}

					p {
						font-size: 1rem;
					}
				}
			}

			main {
				padding: 2rem 0;
			}

			footer {
				display: flex;
				align-items: center;
				justify-content: center;
				background: #9fccff;
				margin: -1rem -2rem;
				padding: 1rem 2rem;
			}
		}
	}
</style>
