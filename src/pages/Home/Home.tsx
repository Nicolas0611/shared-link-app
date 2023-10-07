import { Stack } from '@mui/material';

import Container from '../../shared/Container/container.styled';
import PhoneWrapper from '../../shared/Phone/phone.wrapper';

function Home() {
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
			<Container sx={{ flex: '2' }}>
				<h2>Hola</h2>
			</Container>
		</Stack>
	);
}

export default Home;
