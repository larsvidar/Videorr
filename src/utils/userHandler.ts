import type {User} from '@auth0/auth0-vue';

export interface IUser {
	username: string,
	email: string,
	fullName: string,
	thumbnail: string,
	service: string,
	updatedAt?: number,
	language?: string,
	isEmailVerified?: boolean,
	firstName?: string,
	lastName?: string,
}

export function formatUser(user: User): Partial<IUser> | null {
	if(!user) return null;

	const service = user.sub?.split('|')[0].split('-')[0];

	const formattedUser = {
		username: user.nickname,
		email: user.email,
		fullName: user.name,
		thumbnail: user.picture,
		updatedAt: user.updated_at ? new Date(user.updated_at).valueOf() : undefined,
		service,
		language: user.locale,
		isEmailVerified: !!user.email_verified,
		firstname: user.given_name,
		lastname: user.family_name,
	};

	return formattedUser;
}
