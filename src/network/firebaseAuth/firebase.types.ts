type AuthType = 'signup' | 'login';

export interface BaseAuthProps {
	onSuccess?: (route: string) => void;
	onError?: (message: string) => void;
}
export interface FirebaseAuthProps extends BaseAuthProps {
	authType: AuthType;
	values: {
		email: string;
		password: string;
	};
}
