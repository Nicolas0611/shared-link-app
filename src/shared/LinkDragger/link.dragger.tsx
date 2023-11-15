import { Stack, Typography, Button } from '@mui/material';

import { LinkDraggerProps } from './link.types';
import { useEffect } from 'react';
import InputHandler from '../InputHandler/input.handler';

function LinkDragger({
	content,
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

	useEffect(() => {
		console.log(content);
	}, [content]);

	const dataInputs = [
		{
			type: 'dropdown',
			dropdownItems: dropDownItems,
			name: dropdownName,
			defaultValue: '',
			value: values.platform,
			required: true,
			label: 'Choose a platform',
			onChange: handleInputChange,
		},
		{
			type: 'text',
			name: inputName,
			value: values.link,
			required: true,
			label: 'Attach your link',
			variant: 'outlined',
			onChange: handleInputChange,
		},
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
			{dataInputs.map((input, index) => (
				<InputHandler key={`input_${index}`} {...input} />
			))}
		</Stack>
	);
}

export default LinkDragger;
