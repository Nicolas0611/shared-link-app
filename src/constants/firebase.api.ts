export const FIREBASE_QUERYS = (userId: string | undefined) => ({
	USERS: `users/`,
	USER_ID: ` users/${userId}`,
	USER_LINKS: `users/${userId}/links`,
});
