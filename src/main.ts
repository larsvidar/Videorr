import './assets/base.scss';
import './assets/main.scss';
import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import {createAuth0} from '@auth0/auth0-vue';

const app = createApp(App);

app.use(router);
app.use(
	createAuth0({
		domain: 'larsvidar.eu.auth0.com',
		clientId: 'xrSBXNP29UmfJXFfmykJKvpKjMxST5nl',
		authorizationParams: {
			redirect_uri: window.location.origin
		}
	})
);

app.mount('#app');
