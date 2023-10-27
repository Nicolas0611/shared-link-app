import { auth, db } from '../../libs/firebase/firebase.config';
import { addDoc, collection } from 'firebase/firestore';

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
