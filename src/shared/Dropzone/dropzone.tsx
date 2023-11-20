import { Box, Button, FormHelperText } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { DropzoneProps } from './dropzone.files';

function Dropzone({ acceptedFormats, size, variant }: DropzoneProps) {
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

	const inputSize = {
		md: {
			width: '12.063rem',
			height: '12.063rem',
		},
		sm: {
			width: 'auto',
			height: 'auto',
		},
	}[size];

	return (
		<Box
			display="flex"
			flexDirection={size === 'md' ? 'row' : 'column'}
			alignItems="center"
			gap={2}
		>
			<Button
				component="label"
				sx={inputSize}
				variant={variant}
				startIcon={<CloudUploadIcon />}
			>
				Upload file
				<VisuallyHiddenInput accept={acceptedFormats} type="file" />
			</Button>
			<FormHelperText>Accepted formats: {acceptedFormats}</FormHelperText>
		</Box>
	);
}

export default Dropzone;
