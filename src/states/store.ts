import {formatUser} from '@/utils/userHandler';
import {useAuth0} from '@auth0/auth0-vue';
import {reactive} from 'vue';

export const store = () => {
	const {user, isLoading, isAuthenticated} = useAuth0();

	// This is the store object that will be available to all components
	return reactive({
		user: formatUser(user.value),
		isLoading: isLoading,
		isAuthenticated: isAuthenticated,
	});
};
