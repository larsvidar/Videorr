import {reactive} from 'vue';

export const store = reactive({
	// This is the store object that will be available to all components
	// in the application via the inject() function.

	videoSrc: 'test',
});