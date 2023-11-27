import { Box, TextField, Typography } from '@mui/material';

function InputText({ ...props, showLabel }) {
	const { label } = props;
	return (
		<Box>
			{
				<Typography variant="body1" color={'text.disabled'}>
					Profile Picture
				</Typography>
			}
			<TextField {...props} />
		</Box>
	);
}

export default InputText;
