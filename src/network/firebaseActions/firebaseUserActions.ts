import { LinkProps } from '../../context/LinkDragger/link.types';
import { auth, db } from '../../libs/firebase/firebase.config';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';

export const addCustomLinks = async (
	data: LinkProps,
	handleOnSuccess: ({ route, message }: HandleOnSuccessProps) => void,
	handleOnError: ({ message }: HandleOnError) => void
) => {
	if (auth.currentUser) {
		try {
			const uid = auth.currentUser.uid;
			const userLinksCollectionRef = collection(db, `users/${uid}/links`);
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

export const getCustomLinks = async (
	handleOnError: ({ message }: HandleOnError) => void
) => {
	if (auth.currentUser) {
		try {
			const uid = auth.currentUser.uid;
			const q = query(collection(db, `users/${uid}/links`));
			const querySnapshot = await getDocs(q);
			if (querySnapshot.empty) {
				handleOnError({
					message: 'No se encontro datos',
				});
				return;
			}
			const jobList = [];
			querySnapshot.forEach((doc) => {
				jobList.push({ ...doc.data() });
			});
			console.log(jobList);
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
