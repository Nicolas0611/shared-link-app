import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../../shared/Header/Header';

function Authenticated() {
	return (
		<Box>
			<Header />
			<Box sx={{ padding: '0 2rem', height: '83vh' }}>
				<Outlet />
			</Box>
		</Box>
	);
}

export default Authenticated;
