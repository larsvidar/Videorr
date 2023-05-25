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
			path: '/login',
			name: 'login',
			component: () => import('../views/LoginView.vue')
		},
		{
			path: '/video',
			name: 'video',
			component: () => import('../views/VideoView.vue')
		}
	]
});


export default router;
