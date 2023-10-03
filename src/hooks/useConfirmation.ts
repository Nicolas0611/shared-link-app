import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

export const useConfirmation = () => {
	const { enqueueSnackbar } = useSnackbar();
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleOnSucces = (route: string) => {
		navigate(route);
		setLoading(false);
	};

	const handleOnError = (message: string) => {
		enqueueSnackbar(message, {
			variant: 'error',
		});
		setLoading(false);
	};

	return {
		loading,
		handleOnSucces,
		handleOnError,
	};
};
