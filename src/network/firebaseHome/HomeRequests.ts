import { FIREBASE_QUERYS } from '../../constants/firebase.api';
import { LinkProps } from '../../context/LinkDragger/link.types';
import { auth } from '../../libs/firebase/firebase.config';
import {
	getHttpFirebaseFn,
	postHttpFirebaseFn,
} from '../../utils/firebaseRequests';

export const addCustomLinks = async (
	data: LinkProps,
	handleOnSuccess: ({ route, message }: HandleOnSuccessProps) => void,
	handleOnError: ({ message }: HandleOnError) => void
) => {
	if (auth.currentUser) {
		const uid = auth.currentUser.uid;
		try {
			await postHttpFirebaseFn({
				collectionPath: FIREBASE_QUERYS(uid).USER_LINKS,
				data,
				handleOnSuccess: () => {
					handleOnSuccess({
						message: 'Links added successfully',
					});
				},
				handleOnError,
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
			const jobList = await getHttpFirebaseFn<LinkProps>({
				collectionPath: FIREBASE_QUERYS(uid).USER_LINKS,
				orderByValue: 'data',
				handleOnSuccess,
				handleOnError,
			});
			const latestLink = Array.isArray(jobList) ? jobList[0] : null;
			setTemporalLinks(latestLink!);
			handleOnSuccess({ route: undefined, message: undefined });
		} catch (error) {
			handleOnError({
				message: error as string,
			});
		}
	} else {
		handleOnError({
			message: 'User not found',
		});
	}
};
