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
