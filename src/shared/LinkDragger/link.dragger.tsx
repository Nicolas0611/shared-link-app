import { useState } from 'react';
import { Stack, Typography, Button, TextField } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import Dropdown from '../Dropdown/dropdown';

function LinkDragger() {
	const [age, setAge] = useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value);
	};
	const dropDownItem = [
		{ label: 'Hola', value: '1' },
		{ label: 'Hola que más', value: '2' },
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
					Link #1
				</Typography>
				<Button variant="text">Remove</Button>
			</Stack>
			<Dropdown
				handleChange={handleChange}
				label="Platform"
				value={age}
				dropdownItems={dropDownItem}
			/>
			<TextField
				/* 					value={}
					onChange={} */
				name="link"
				type="text"
				label="Link"
				variant="outlined"
				required={true}
			/>
		</Stack>
	);
}

export default LinkDragger;
