import { formatUser } from '@/utils/userHandler';
import {useAuth0} from '@auth0/auth0-vue';
import { reactive } from 'vue';


export function useUser() {
	const {user, isLoading, isAuthenticated} = useAuth0();


	return reactive({
		user: formatUser(user.value),
		isLoading: isLoading.value,
		isAuthenticated: isAuthenticated.value,
	});
}