<script setup lang='ts'>
	import RestrictedAccess from '@/components/RestrictedAccess.vue';
	import TheContainer from '@/components/TheContainer.vue';
	import TheVideo from '@/components/Video/TheVideo.vue';
</script>


<template>
	<RestrictedAccess>
		<TheContainer>
			<TheVideo />
		</TheContainer>
	</RestrictedAccess>
</template>