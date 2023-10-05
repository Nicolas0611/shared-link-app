import { Box } from '@mui/material';
import Header from '../../shared/Header/header';
import { Outlet } from 'react-router-dom';

function Authenticated() {
	return (
		<Box>
			<Header />
			<Box sx={{ padding: '2rem' }}>
				<Outlet />
			</Box>
		</Box>
	);
}

export default Authenticated;
