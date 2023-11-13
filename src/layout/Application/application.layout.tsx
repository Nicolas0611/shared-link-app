import { Stack } from '@mui/material';

import Container from '../../shared/Container/container.styled';
import { ApplicationProps } from './application.types';
import Phone from '../../assets/Phone';

function Application({ children }: ApplicationProps) {
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
			<Container sx={{ flex: '2', padding: '2.5rem' }}>{children}</Container>
		</Stack>
	);
}

export default Application;
