import {
	addDoc,
	collection,
	getDocs,
	orderBy,
	query,
} from 'firebase/firestore';
import { db } from '../libs/firebase/firebase.config';

type FirebasePostProps = {
	collectionPath: string;
	data?: unknown;
	handleOnSuccess: ({ route, message }: HandleOnSuccessProps) => void;
	handleOnError: ({ message }: HandleOnError) => void;
};
type FirebaseGetProps = {
	collectionPath: string;
	data?: unknown;
	orderByValue: string;
	handleOnSuccess: ({ route, message }: HandleOnSuccessProps) => void;
	handleOnError: ({ message }: HandleOnError) => void;
};

export const postHttpFirebaseFn = async ({
	collectionPath,
	data,
	handleOnSuccess,
	handleOnError,
}: FirebasePostProps) => {
	try {
		const collectionRef = collection(db, collectionPath);
		await addDoc(collectionRef, data);
		handleOnSuccess({ message: 'Success' });
	} catch (error) {
		handleOnError({
			message: error as string,
		});
	}
};

export const getHttpFirebaseFn = async <T>({
	collectionPath,
	orderByValue,
	handleOnSuccess,
	handleOnError,
}: FirebaseGetProps): Promise<T | T[] | null> => {
	try {
		const q = query(
			collection(db, collectionPath),
			orderBy(orderByValue, 'desc')
		);
		const querySnapshot = await getDocs(q);
		if (querySnapshot.empty) {
			handleOnError({
				message: 'No data found',
			});
			return [];
		} else {
			const list: Array<T> = [];
			querySnapshot.forEach((doc) => {
				list.push({ ...(doc.data() as T) });
			});
			handleOnSuccess({ message: undefined });
			return list;
		}
	} catch (error) {
		handleOnError({
			message: error as string,
		});
		return null;
	}
};
