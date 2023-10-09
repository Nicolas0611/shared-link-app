import { Stack, Typography } from '@mui/material';
import { DefaultProps } from './default.types';

function Default({ Image, title, subtitle }: DefaultProps) {
	return (
		<Stack
			alignItems="center"
			justifyContent="center"
			bgcolor="background.default"
			sx={{ padding: '1.5rem' }}
			spacing={2}
			borderRadius="1rem"
			height="100%"
		>
			<Image />
			<Typography variant="h4" sx={{ fontWeight: 'bold' }}>
				{title}
			</Typography>
			<Typography
				sx={{ width: '70%' }}
				textAlign="center"
				variant="body1"
				color={'text.disabled'}
			>
				{subtitle}
			</Typography>
		</Stack>
	);
}

export default Default;
