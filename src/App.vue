<script setup lang='ts'>
	import TheHeader from '@/components/Main/TheHeader.vue';
	import TheFooter from '@/components/Main/TheFooter.vue';
	import heroImage from '@/assets/images/social.jpg';
	import {useHead} from '@vueuse/head';

	//Head-tags for SEO
	useHead({
		title: 'VideoRR - Se dine videoer i nettleseren',
		meta: [
			{
				name: 'description', 
				content: 'Med VideoRR kan du last inn videoene dine og se dem rett i nettleseren.',
			},
			{
				property: 'og:url', 
				content: origin,
			},
			{
				property: 'og:image',
				content: heroImage,
			},
			{
				name: 'twitter:card',
				content: 'summary_large_image',
			},
		],
		link: [
			{
				rel: 'canonical',
				href: origin,
			},
			{
				rel: 'icon',
				href: 'images/favicon.ico',
			},
		],
	});
</script>


<template>
	<div class='appContent'>
		<TheHeader />

		<main>
			<RouterView />
		</main>

		<TheFooter />
	</div>
</template>


<style scoped lang="scss">
.appContent {
	display: flex;
	flex-direction: column;
	background-color: var(--color-background);
	width: var(--appWidth);
	overflow: auto;
}
</style>
