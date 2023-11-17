import { FIREBASE_QUERYS } from '../../constants/firebase.api';
import { LinkProps } from '../../context/LinkDragger/link.types';
import { auth, db } from '../../libs/firebase/firebase.config';
import {
	addDoc,
	collection,
	getDocs,
	orderBy,
	query,
} from 'firebase/firestore';

export const addCustomLinks = async (
	data: LinkProps,
	handleOnSuccess: ({ route, message }: HandleOnSuccessProps) => void,
	handleOnError: ({ message }: HandleOnError) => void
) => {
	if (auth.currentUser) {
		const uid = auth.currentUser.uid;
		try {
			const userLinksCollectionRef = collection(
				db,
				FIREBASE_QUERYS(uid).USER_LINKS
			);
			await addDoc(userLinksCollectionRef, data);
			handleOnSuccess({
				message: 'Links añadidos exitosamente',
			});
		} catch (error) {
			handleOnError({
				message: error as string,
			});
		}
	} else {
		handleOnError({
			message: 'Usuario no encontrado',
		});
	}
};

//TODO: DO CUSTOM HOOK TO CONSUME FIREBASE FUNCTIONS
export const getLinks = async (
	handleOnError: ({ message }: HandleOnError) => void,
	handleOnSuccess: ({ route, message }: HandleOnSuccessProps) => void,
	setTemporalLinks: React.Dispatch<React.SetStateAction<LinkProps>>
) => {
	if (auth.currentUser) {
		try {
			const uid = auth.currentUser.uid;
			const q = query(
				collection(db, FIREBASE_QUERYS(uid).USER_LINKS),
				orderBy('data', 'desc')
			);
			const querySnapshot = await getDocs(q);
			if (querySnapshot.empty) {
				handleOnError({
					message: 'No se encontro datos',
				});
				return;
			}
			const jobList: LinkProps[] = [];
			querySnapshot.forEach((doc) => {
				jobList.push({ ...(doc.data() as LinkProps) });
			});
			setTemporalLinks(jobList[0]);
			handleOnSuccess({ route: undefined, message: undefined });
		} catch (error) {
			handleOnError({
				message: error as string,
			});
		}
	} else {
		handleOnError({
			message: 'Usuario no encontrado',
		});
	}
};
