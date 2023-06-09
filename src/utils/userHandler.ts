import type {User} from '@auth0/auth0-vue';
import {capitalize, isEmpty, removeEmpty} from '@/utils/helpers';
import type {IUser} from '@/types/IGeneral';


export function formatUser(user: User): Partial<IUser> | null {
	if (isEmpty(user)) return null;

	const service = capitalize(user.sub?.split('|')[0].split('-')[0]);
	const fullName = user.name?.includes('@')
		? user.nickname || user.name.split('@')[0]
		: user.name;

	const formattedUser = {
		username: user.nickname,
		email: user.email,
		fullName,
		thumbnail: user.picture,
		updatedAt: user.updated_at ? new Date(user.updated_at).valueOf() : undefined,
		service,
		language: user.locale,
		isEmailVerified: !!user.email_verified,
		firstname: user.given_name,
		lastname: user.family_name,
	};

	return removeEmpty(formattedUser);
}
