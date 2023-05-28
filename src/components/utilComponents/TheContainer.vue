<template>
	<div class='container'>
		<slot></slot>
	</div>
</template>

<style scoped lang='scss'>
	.container {
		padding: var(--main-padding);
		background-color: var(--primary-background-color);
	}
</style>