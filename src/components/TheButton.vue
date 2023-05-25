<script setup lang="ts">
	defineProps<{
		click?: (...params: any) => void,
	}>();
</script>

<template>
	<button @click='click'>
		<slot></slot>
	</button>
</template>


<style scoped lang="scss">
	button {
		padding: 5px 8px;
		background-color: #f3f3f3;
		border: solid 1px #ddd;
		border-radius: 5px;
		cursor: pointer;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	}
</style>