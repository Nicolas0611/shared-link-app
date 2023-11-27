import { FIREBASE_QUERYS } from '../../constants/firebase.api';
import { auth } from '../../libs/firebase/firebase.config';
import { InitialProfileType } from '../../pages/Profile/constants';
import { postHttpFirebaseFn } from '../../utils/firebaseRequests';

export const addProfileData = async (
	data: InitialProfileType,
	handleOnSuccess: ({ route, message }: HandleOnSuccessProps) => void,
	handleOnError: ({ message }: HandleOnError) => void
) => {
	if (auth.currentUser) {
		const uid = auth.currentUser.uid;
		try {
			await postHttpFirebaseFn({
				collectionPath: FIREBASE_QUERYS(uid).USER_PROFILE_DATA,
				data,
				handleOnSuccess: () => {
					handleOnSuccess({
						message: 'Your changes have been successfully saved!',
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
