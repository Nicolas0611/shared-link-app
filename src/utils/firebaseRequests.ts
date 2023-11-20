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
type ParamsTypes = {
	collectionPath: string;
	orderByValue: string;
	sort: 'asc' | 'desc';
};

type FirebaseGetProps = {
	params: ParamsTypes;
	data?: unknown;
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
	params,
	handleOnSuccess,
	handleOnError,
}: FirebaseGetProps): Promise<T | T[] | null> => {
	const { collectionPath, orderByValue, sort } = params;
	try {
		const q = query(
			collection(db, collectionPath),
			orderBy(orderByValue, sort)
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
