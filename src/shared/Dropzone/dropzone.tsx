import { useState } from 'react';
import { Box, Button, FormHelperText, FormControl } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { DropzoneProps } from './dropzone.types';
import { VisuallyHiddenInput } from './dropzone.styled';
import { useFormikContext } from 'formik';

const Dropzone = ({ acceptedFormats, size, variant, name }: DropzoneProps) => {
	const { setFieldValue } = useFormikContext();

	const [file, setFile] = useState<string | null>(null);

	const inputSize = {
		md: {
			width: '10.063rem',
			height: '10.063rem',
			backgroundImage: file && `url(${file})`,
		},
		sm: {
			width: 'auto',
			height: 'auto',
			backgroundImage: file && `url(${file})`,
		},
	}[size];

	const handleFileChange = (event: React.FormEvent<HTMLInputElement>) => {
		const inputElement = event.target as HTMLInputElement;
		if (inputElement.files && inputElement.files[0]) {
			const fileUrl = URL.createObjectURL(inputElement.files[0]);
			setFile(fileUrl);
			void setFieldValue(name, fileUrl);
		}
	};

	return (
		<FormControl>
			<Box
				display="flex"
				flexDirection={size === 'md' ? 'row' : 'column'}
				alignItems="center"
				gap={2}
			>
				<Button
					component="label"
					sx={{
						...inputSize,
						backgroundImage:
							file &&
							`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${file})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						color: file && 'white',
					}}
					variant={variant}
					startIcon={<CloudUploadIcon />}
				>
					Upload file
					<VisuallyHiddenInput
						name={name}
						onChange={handleFileChange}
						accept={acceptedFormats}
						type="file"
					/>
				</Button>
				<FormHelperText>Accepted formats: {acceptedFormats}</FormHelperText>
			</Box>
		</FormControl>
	);
};

export default Dropzone;
