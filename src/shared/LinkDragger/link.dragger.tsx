import { Stack, Typography, Button, TextField } from '@mui/material';

import { LinkDraggerProps } from './link.types';
import Dropdown from '../Dropdown/dropdown';

function LinkDragger({
	linkId,
	onDelete,
	dropdownName,
	inputName,
	values,
	handleInputChange,
}: LinkDraggerProps) {
	const dropDownItems = [
		{ label: 'Github', value: 'github' },
		{ label: 'Twitter', value: 'twitter' },
		{ label: 'LinkedIn', value: 'linkedin' },
		{ label: 'Youtube', value: 'youtube' },
		{ label: 'Facebook', value: 'facebook' },
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
					{`Link#${linkId}`}
				</Typography>
				<Button onClick={onDelete} variant="text">
					Remove
				</Button>
			</Stack>

			<Dropdown
				dropdownItems={dropDownItems}
				name={dropdownName}
				defaultValue={''}
				value={values.platform}
				isRequired={true}
				label={'Choose a platform'}
				handleChange={handleInputChange}
			/>

			<TextField
				required={true}
				name={inputName}
				type="text"
				value={values.link}
				label="Attach your link"
				variant="outlined"
				onChange={handleInputChange}
			/>
		</Stack>
	);
}

export default LinkDragger;
