<script setup lang='ts'>
	defineProps<{
		src: string | undefined,
		size?: {
			type: number,
			default: 50,
		},
	}>();
</script>


<template>
	<img 
		v-if='src' 
		:src='src' 
		alt='Profile-image'
		:style="{'--size': `${size}px`}"
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