import {formatUser} from '@/utils/userHandler';
import {useAuth0} from '@auth0/auth0-vue';
import {reactive} from 'vue';

export const store = () => {
	const {user: rawUser} = useAuth0();
	const user = formatUser(rawUser.value);

	return reactive({
		// This is the store object that will be available to all components
		// in the application via the inject() function.
		
		user,
	});
};