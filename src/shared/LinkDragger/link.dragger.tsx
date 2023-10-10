import { useState } from 'react';
import { Stack, Typography, Button, TextField } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import Dropdown from '../Dropdown/dropdown';
import { LinkDraggerProps } from './link.types';

function LinkDragger({ linkId, onDelete, setLinks }: LinkDraggerProps) {
	const [platforms, setPlatforms] = useState('');

	const handleDropdownChange = (event: SelectChangeEvent) => {
		setPlatforms(event.target.value);

		setLinks((prevState) => {
			const updatedListWithPlatforms = prevState.activeLinks.map((link) => {
				if (link.linkId === linkId) {
					return { ...link, data: event.target.value };
				}
				return link;
			});

			return {
				...prevState,
				activeLinks: updatedListWithPlatforms,
			};
		});
	};

	const dropDownItems = [
		{ label: 'Github', value: 'github' },
		{ label: 'Frontend Mentor', value: 'fe_mentor' },
		{ label: 'Twitter', value: 'twitter' },
		{ label: 'LinkedIn', value: 'linkedin' },
		{ label: 'Youtube', value: 'youtube' },
		{ label: 'Facebook', value: 'facebook' },
		{ label: 'Twitch', value: 'twitch' },
	];

	return (
		<Stack
			spacing={2}
			bgcolor="background.default"
			borderRadius="12px"
			padding="1.25rem"
		>
			<Stack direction="row" alignItems="center" justifyContent="space-between">
				<Typography variant="body1" color={'text.disabled'}>
					{linkId}
				</Typography>
				<Button
					onClick={() => {
						onDelete(linkId);
					}}
					variant="text"
				>
					Remove
				</Button>
			</Stack>
			<Dropdown
				handleChange={handleDropdownChange}
				label="Choose a Platform"
				value={platforms}
				dropdownItems={dropDownItems}
			/>
			<TextField
				value={''}
				/* 				onChange={}
				 */ name="link"
				type="text"
				label="Attach your link"
				variant="outlined"
				required={true}
			/>
		</Stack>
	);
}

export default LinkDragger;
