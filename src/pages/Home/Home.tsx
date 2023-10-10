import { useState } from 'react';
import { Stack, Typography, Box, Button } from '@mui/material';

import Application from '../../layout/Application/application.layout';
import LinkDragger from '../../shared/LinkDragger/link.dragger';
import { Scrollable } from '../../shared/Scrollable/scrollable.styled';
import DefaultImage from '../../assets/DefaultImage';
import Default from '../../shared/Default/default';
import { Link } from '../../shared/LinkDragger/link.types';

function Home() {
	const [links, setLinks] = useState<{
		activeLinks: Link[];
		linkCounter: number;
	}>({
		activeLinks: [],
		linkCounter: 1,
	});

	const addLink = () => {
		if (links.activeLinks.length < 5) {
			setLinks((prevState) => {
				return {
					activeLinks: [
						...prevState.activeLinks,
						{ linkId: `Link#${prevState.linkCounter}`, data: '' },
					],
					linkCounter: prevState.linkCounter + 1,
				};
			});
		}
	};
	const deleteLink = (linkId: string) => {
		setLinks((prevState) => ({
			...prevState,
			activeLinks: prevState.activeLinks.filter(
				(link) => link.linkId !== linkId
			),
		}));
	};

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
				<Button
					onClick={addLink}
					variant="outlined"
					color="primary"
					size="large"
				>
					Add new link
				</Button>
				{links.activeLinks.length !== 0 ? (
					<Scrollable spacing={2}>
						{links.activeLinks.map((link) => (
							<LinkDragger
								key={link.linkId}
								linkId={link.linkId}
								onDelete={deleteLink}
								setLinks={setLinks}
							/>
						))}
					</Scrollable>
				) : (
					<Default
						Image={DefaultImage}
						title="Let’s get you started"
						subtitle="Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!"
					/>
				)}

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
