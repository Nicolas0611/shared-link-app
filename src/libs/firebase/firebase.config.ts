import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
