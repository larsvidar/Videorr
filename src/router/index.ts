import {createRouter, createWebHistory} from 'vue-router';


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/HomeView.vue')
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue')
		},
		{
			path: '/profile',
			name: 'profile',
			component: () => import('../views/ProfileView.vue')
		},
		{
			path: '/authenticate',
			name: 'authenticate',
			component: () => import('../views/AuthenticateView.vue')
		},
		{
			path: '/video',
			name: 'video',
			component: () => import('../views/VideoView.vue')
		}
	]
});


export default router;
