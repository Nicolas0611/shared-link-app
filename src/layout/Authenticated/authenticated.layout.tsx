import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../../shared/Header/Header';
import LinkContextComponent from '../../context/LinkDragger/link-context.component';

function Authenticated() {
	return (
		<LinkContextComponent>
			<Box>
				<Header />
				<Box sx={{ padding: '0 2rem', height: '83vh' }}>
					<Outlet />
				</Box>
			</Box>
		</LinkContextComponent>
	);
}

export default Authenticated;
