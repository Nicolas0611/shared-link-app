import { Stack, Typography, Box, Button } from '@mui/material';

import Application from '../../layout/Application/application.layout';
import LinkDragger from '../../shared/LinkDragger/link.dragger';
import { Scrollable } from '../../shared/Scrollable/scrollable.styled';

function Home() {
	return (
		<Application>
			<Stack height="100%" spacing={4}>
				<Box>
					<Typography variant="h4" sx={{ fontWeight: 'bold' }}>
						Customize your links
					</Typography>
					<Typography variant="body1" color={'text.disabled'}>
						Add/edit/remove links below and then share all your profiles with
						the world!
					</Typography>
				</Box>
				<Button variant="outlined" color="primary" size="large">
					Add new link
				</Button>
				<Scrollable spacing={2}>
					<LinkDragger />
					<LinkDragger />
					<LinkDragger />
					<LinkDragger />
					<LinkDragger />
				</Scrollable>
				{/* 	<Default
						Image={DefaultImage}
						title="Let’s get you started"
						subtitle="Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!"
					/> */}
				<Box display="flex" justifyContent="flex-end">
					<Button
						variant="contained"
						color="primary"
						size="large"
						disabled={true}
					>
						Save
					</Button>
				</Box>
			</Stack>
		</Application>
	);
}

export default Home;
