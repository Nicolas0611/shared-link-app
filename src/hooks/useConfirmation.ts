import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

export const useConfirmation = () => {
	const { enqueueSnackbar } = useSnackbar();
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleOnSuccess = ({ route, message }: HandleOnSuccessProps) => {
		if (route) navigate(route);
		if (message) enqueueSnackbar(message, { variant: 'success' });
		setLoading(false);
	};

	const handleOnError = ({ message }: HandleOnError) => {
		enqueueSnackbar(message, {
			variant: 'error',
		});
		setLoading(false);
	};

	return {
		loading,
		setLoading,
		handleOnSuccess,
		handleOnError,
	};
};
