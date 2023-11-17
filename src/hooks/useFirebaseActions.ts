import { addDoc, collection } from 'firebase/firestore';

import { auth, db } from '../libs/firebase/firebase.config';

export const useFirebaseActions = () => {
	const postHttpFirebaseFn = async (
		query: string,
		data: any,
		handleOnSuccess: ({ route, message }: HandleOnSuccessProps) => void,
		handleOnError: ({ message }: HandleOnError) => void
	) => {
		try {
			const collectionRef = collection(db, query);
			await addDoc(collectionRef, data);
			handleOnSuccess({ message: 'Success' });
		} catch (error) {
			handleOnError({
				message: error as string,
			});
		}
	};

	return {
		postHttpFirebaseFn,
	};
};
