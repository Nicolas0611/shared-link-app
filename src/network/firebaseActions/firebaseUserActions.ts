import { auth, db } from '../../libs/firebase/firebase.config';
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	limit,
	orderBy,
	query,
} from 'firebase/firestore';

export const addCustomLinks = async (data) => {
	//TODO REFACTOR FUNCTION AND ADD SECURITY RULES
	try {
		const user = auth.currentUser;
		const uid = user.uid;
		// Create a CollectionReference for the user's collection of links
		const userLinksCollectionRef = collection(db, `users/${uid}/links`);

		// Add a new document to the user's collection of links
		await addDoc(userLinksCollectionRef, data);
		console.log('Datan sent successfully');
	} catch (error) {
		console.error('Error sending data to Firestore:', error);
	}
};
export const getCustomLinks = async () => {
	const user = auth.currentUser;
	const uid = user.uid;
	// Pass the Firestore database instance as a parameter

	try {
		const q = query(collection(db, `users/${uid}/links`));
		const querySnapshot = await getDocs(q);
		if (querySnapshot.empty) {
			console.log('No documents found');
			return;
		}
		const lastDocument = querySnapshot.docs[0];
		console.log('Last Document ID:', lastDocument.id);
		console.log('Last Document Data:', lastDocument.data());
	} catch (error) {
		console.error('Error getting documents:', error);
	}
};
