import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../libs/firebase/firebase.config';
import { FirebaseAuthProps } from './firebase.types';
import { PATHS } from '../../router/paths';

export const firebaseAuth = ({
	authType,
	values,
	onError,
	onSuccess,
}: FirebaseAuthProps) => {
	const { email, password } = values;
	const authFunction = {
		login: signInWithEmailAndPassword,
		signup: createUserWithEmailAndPassword,
	};
	authFunction[authType](auth, email, password)
		.then(() => {
			onSuccess?.(PATHS.ROOT);
		})
		.catch((error: string) => {
			onError?.(error);
		});
};
