import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { auth } from '../../libs/firebase/firebase.config';
import { BaseAuthProps, FirebaseAuthProps } from './firebase.types';
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

export const fireBaseLogOut = ({ onSuccess, onError }: BaseAuthProps) => {
	signOut(auth)
		.then(() => {
			onSuccess?.(PATHS.AUTH);
		})
		.catch((error: string) => {
			onError?.(error);
		});
};
