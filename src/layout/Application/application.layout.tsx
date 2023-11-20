import { Stack, Box, Typography } from '@mui/material';

import Container from '../../shared/Container/container.styled';
import { ApplicationProps } from './application.types';
import Phone from '../../assets/Phone';

function Application({ children, title, subtitle }: ApplicationProps) {
	return (
		<Stack height={'100%'} spacing={2} direction={'row'}>
			<Container
				sx={{
					flex: '1',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Phone />
			</Container>
			<Container sx={{ flex: '2', padding: '2.5rem' }}>
				<Box
					height={'100%'}
					display={'flex'}
					flexDirection={'column'}
					gap={{ lg: '1.2rem', xl: '2.2rem' }}
				>
					<Box>
						<Typography variant="h4" sx={{ fontWeight: 'bold' }}>
							{title}
						</Typography>
						<Typography variant="body1" color={'text.disabled'}>
							{subtitle}
						</Typography>
					</Box>
					{children}
				</Box>
			</Container>
		</Stack>
	);
}

export default Application;
