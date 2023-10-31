type AuthType = 'signup' | 'login';

export interface BaseAuthProps {
	onSuccess?: ({ route, message }: HandleOnSuccessProps) => void;
	onError?: ({ message }: HandleOnError) => void;
}
export interface FirebaseAuthProps extends BaseAuthProps {
	authType: AuthType;
	values: {
		email: string;
		password: string;
	};
}
