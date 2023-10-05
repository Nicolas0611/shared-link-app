type AuthType = 'signup' | 'login';

export interface FirebaseAuthProps {
	authType: AuthType;
	values: {
		email: string;
		password: string;
	};
	onSuccess?: (route: string) => void;
	onError?: (message: string) => void;
}
