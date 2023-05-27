<script setup lang='ts'>
	import VideoInput from '@/components/VideoInput.vue';
	import RestrictedAccess from '@/components/RestrictedAccess.vue';
</script>


<template>
	<RestrictedAccess>
		<VideoInput />
	</RestrictedAccess>
</template>