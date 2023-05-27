<script setup lang='ts'>
	import VideoIcon from '@/assets/icons/VideoIcon.vue';
	import {reactive, ref} from 'vue';

	const props = defineProps<{
		onChange?: (file?: File) => void,
	}>();

	const video = ref();
	
	const localState = reactive({
		url: '',
		title: '',
	});

	
	/**
	 * Handle changed file-input and use file on video-element
	 * @param event 
	 */
	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		const file = target.files?.[0];
		localState.title = file?.name ?? '';
		localState.url = file ? URL.createObjectURL(file) : '';
		video.value.src = localState.url;
		props.onChange?.(file);
	}
</script>


<template>
	<div class='videoInput'>
		<label htmlFor={field.id} class='label'>{{localState.title}}</label>

		<div class='inputField'>
			<input
				v-if="!localState.url"
				type='file'
				accept='mime/video'
				@change='handleChange'
			/>
			<div class='content'>
				<VideoIcon />
				<p class='text'>Velg en videofil</p>
				<p class='description'>Klikk eller dra en fil hit</p>
			</div>

			<video
				ref='video'
				controls='true'
				autoplay
				muted
				:class='localState.url ? "" : "invisible"'
			></video>
		</div>
	</div>
</template>


<style scoped lang='scss'>
	.videoInput {
		display: flex;
		flex-direction: column;
		height: 100%;

		.label {
			color: hsl(225, 12%, 85%);
			font-size: 18px;
			font-weight: 500;
			margin-bottom: 8px;
		}

		.inputField {
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			height: 400px;
			width: 600px;
			background: #ddd;
			border-radius: 8px;

			input[type='file']  {
				height: 100%;
				width: 100%;
				position: absolute;
				top: 0;
				left: 0;
				object-fit: cover;
				border-radius: 8px;
				cursor: pointer;
				opacity: 0;
				z-index: 9;
			}

			.content {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				color: #888;

				svg {
					width: 64px;
					height: 64px;
					margin-bottom: 16px;
				}

				.text {
					font-size: 18px;
					font-weight: 400;
					margin-bottom: 4px;
				}
		
				.description {
					text-align: center;
					font-size: 12px;
					margin-bottom: 0px;
					font-style: italic;
				}
			}

			video {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
			}
		}

		.invisible {
			opacity: 0;
		}
	}
</style>