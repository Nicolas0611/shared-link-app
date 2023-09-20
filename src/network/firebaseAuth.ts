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
}

export const firebaseAuth = ({ authType, values }: FirebaseAuthProps) => {
	const { email, password } = values;
	console.log(authType);
	//TODO: ADD ONLOADING / ONSUCESS AND ONERROR TO DISPLAY WITH A COGOTAST

	const authFunction = {
		login: signInWithEmailAndPassword,
		signup: createUserWithEmailAndPassword,
	};
	authFunction[authType](auth, email, password)
		.then((userCredential) => {
			console.log(userCredential);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
};
