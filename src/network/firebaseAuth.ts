import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../libs/firebase/firebase.config';

type AuthType = 'signup' | 'login';

export interface FirebaseAuthProps {
	authType: AuthType;
	values: {
		email: string;
		password: string;
	};
	onSucces?: () => void;
	onError?: (message: string) => void;
}

export const firebaseAuth = ({
	authType,
	values,
	onError,
}: FirebaseAuthProps) => {
	const { email, password } = values;
	console.log(authType);

	const authFunction = {
		login: signInWithEmailAndPassword,
		signup: createUserWithEmailAndPassword,
	};
	authFunction[authType](auth, email, password)
		.then((userCredential) => {
			console.log(userCredential);
		})
		.catch((error: string) => {
			onError?.(error);
		});
};
