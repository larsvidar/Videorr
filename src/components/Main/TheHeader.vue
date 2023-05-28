<script setup lang='ts'>
	import TheContainer from '../utilComponents/TheContainer.vue';
	import LoginButtonVue from '../utilComponents/LoginButton.vue';
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
				<p class='tagLine'>Se videoer i nettleseren</p>
			</div>

			<div class='login'>
				<LoginButtonVue />
			</div>
		</TheContainer>
	</header>
</template>


<style scoped lang='scss'>
header {
	border-bottom: solid 1px var(--borderColor);
	.container{
		display: flex;
		align-items: center;
		background: #9fccff;

		.logo {
			height: 50px;
			margin-right: 32px;

			@media (max-width: 384px) {
				margin-right: 16px;
			}
		}

		.headline {
			display: flex;
			flex-direction: column;
			align-items: flex-start;

			a {
				h1 {
					font-size: 32px;
					margin-right: 16px;

					@media (max-width: 350px) {
						display: none;
					}
				}

				&:hover {
					text-decoration: none;
				}
			}

			.tagLine {
				font-size: 16px;
				white-space: nowrap;

				@media (max-width: 460px) {
					display: none;
				}
			}
		}

		.login {
			margin-left: auto;
		}
	}
}
</style>
