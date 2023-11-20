import { Box, Typography, Button, FormHelperText } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

import Application from '../../layout/Application/application.layout';
import Dropzone from '../../shared/Dropzone/dropzone';
//todo: start profile
function Profile() {
	const VisuallyHiddenInput = styled('input')({
		clip: 'rect(0 0 0 0)',
		clipPath: 'inset(50%)',
		height: 1,
		overflow: 'hidden',
		position: 'absolute',
		bottom: 0,
		left: 0,
		whiteSpace: 'nowrap',
		width: 1,
	});

	return (
		<Application
			title="Profile Details"
			subtitle="Add your details to create a personal touch to your profile."
		>
			<Box
				display="flex"
				padding="1.25rem"
				alignItems="center"
				justifyContent="space-between"
				sx={{
					backgroundColor: 'background.default',
					width: '100%',
					height: '233px',
					borderRadius: '12px',
				}}
			>
				<Typography variant="body1" color={'text.disabled'}>
					Profile Picture
				</Typography>
				<Dropzone size="md" variant="outlined" acceptedFormats=".jpg,  .png" />
			</Box>
		</Application>
	);
}

export default Profile;
