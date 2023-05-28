<script setup lang='ts'>
	import VideoInput from '@/components/VideoInput.vue';
	import RestrictedAccess from '@/components/RestrictedAccess.vue';
	import TheContainer from '@/components/TheContainer.vue';
</script>


<template>
	<RestrictedAccess>
		<TheContainer>
			<VideoInput />
		</TheContainer>
	</RestrictedAccess>
</template>