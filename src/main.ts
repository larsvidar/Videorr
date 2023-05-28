import '@/assets/styles/variables.scss';
import '@/assets/styles/main.scss';
import {createApp} from 'vue';
import App from '@/App.vue';
import router from '@/router';
import {createHead} from '@vueuse/head';
import {createAuth0} from '@auth0/auth0-vue';


const app = createApp(App);
export const head = createHead();

app.use(head);
app.use(router);

app.use(
	createAuth0({
		domain: import.meta.env.VITE_AUTH0_DOMAIN || origin + '/noauth',
		clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
		authorizationParams: {
			redirect_uri: origin + '/',
			display: 'page',
		}
	})
);


app.mount('#app');
