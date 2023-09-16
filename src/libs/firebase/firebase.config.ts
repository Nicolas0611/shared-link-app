import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: 'shared-app-link.firebaseapp.com',
	projectId: 'shared-app-link',
	storageBucket: 'shared-app-link.appspot.com',
	messagingSenderId: '183535559211',
	appId: '1:183535559211:web:49eec8d7029dd38f11c06e',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
