<script setup lang='ts'>
	import TheContainer from './TheContainer.vue';
	import LoginButtonVue from './LoginButton.vue';
	import logo from '@/assets/images/logo.png';
</script>


<template>
	<header>
		<TheContainer>
			<RouterLink to='/'>
				<img alt='logo' class='logo' :src='logo' />
			</RouterLink>

			<div class='headline'>
				<RouterLink to='/'>
					<h1>Videorr</h1>
				</RouterLink>
				<p>Se videofiler i nettleseren</p>
			</div>

			<div class='login'>
				<LoginButtonVue />
			</div>
		</TheContainer>
	</header>
</template>


<style scoped lang='scss'>
header {
	.container{
		display: flex;
		align-items: center;
		background: #9fccff;
		//padding: var(--main-padding);

		.logo {
			height: 50px;
			margin-right: 2rem;
		}

		.headline {
			display: flex;
			flex-direction: column;
			align-items: flex-start;

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

		.login {
			margin-left: auto;
		}
	}
}
</style>
