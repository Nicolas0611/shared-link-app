import { Stack } from '@mui/material';

import Container from '../../shared/Container/container.styled';
import PhoneWrapper from '../../shared/Phone/phone.wrapper';
import { ApplicationProps } from './application.types';

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
				<PhoneWrapper />
			</Container>
			<Container sx={{ flex: '2', padding: '2.5rem' }}>{children}</Container>
		</Stack>
	);
}

export default Application;
