import {
	Stack,
	Typography,
	Button,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@mui/material';

import { LinkDraggerProps } from './link.types';
import { DropdownItems } from '../Dropdown/dropdown.types';

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
		{ label: 'Frontend Mentor', value: 'fe_mentor' },
		{ label: 'Twitter', value: 'twitter' },
		{ label: 'LinkedIn', value: 'linkedin' },
		{ label: 'Youtube', value: 'youtube' },
		{ label: 'Facebook', value: 'facebook' },
		{ label: 'Twitch', value: 'twitch' },
	];
	//Todo: do de correct value label in select and input

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
				<Button
					onClick={() => {
						onDelete(linkId);
					}}
					variant="text"
				>
					Remove
				</Button>
			</Stack>
			<FormControl fullWidth>
				<InputLabel id="select-label">Choose a platform</InputLabel>
				<Select
					name={dropdownName}
					labelId="select-label"
					id="demo-simple-select"
					defaultValue={''}
					value={values.platform}
					label={'Choose a platform'}
					onChange={handleInputChange}
				>
					{dropDownItems.map((item: DropdownItems) => (
						<MenuItem key={item.label} value={item.value}>
							{item.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
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
