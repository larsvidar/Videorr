<script setup lang='ts'>
	import RestrictedAccess from '@/components/utilComponents/RestrictedAccess.vue';
	import TheContainer from '@/components/utilComponents/TheContainer.vue';
	import TheVideo from '@/components/Video/TheVideo.vue';
</script>


<template>
	<RestrictedAccess>
		<TheContainer>
			<TheVideo />
		</TheContainer>
	</RestrictedAccess>
</template>