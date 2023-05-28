<script setup lang='ts'>
	const props = defineProps<{
		src: string | undefined,
		size?: number,
	}>();

	const imageSize = props.size || 50;
</script>


<template>
	<img 
		v-if='src' 
		:src='src' 
		alt='Profile-image'
		:style="{'--size': `${imageSize}px`}"
	/>
</template>


<style scoped>
	img {
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		margin-right: 24px;
	}
</style>