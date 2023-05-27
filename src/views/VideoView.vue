<script setup lang='ts'>
	import VideoInput from '@/components/VideoInput.vue';
	import {store} from '@/states/store';
	import {reactive, ref} from 'vue';

	const video = ref();
	console.log({video: video.value})

	const local = reactive({
		url: '',
	});

	/**
	 * Handle changed fileinput and use file on video-element
	 * @param event 
	 */
	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		const file = target.files?.[0];
		local.url = file ? URL.createObjectURL(file) : '';
		video.value.src = local.url;
	}
</script>


<template>

	<h2>Velg videofil!</h2>

	<VideoInput test="hello" />
</template>