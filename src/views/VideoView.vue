<script setup lang='ts'>
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

	<input type='file' @change='handleChange' />
	<!-- Video-element to show inputed file -->
	<video ref='video' controls width='400' muted autoplay></video>
	
	<p>{{ video?.value?.src }}</p>


</template>