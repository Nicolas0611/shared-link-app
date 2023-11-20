import { Stack, Typography, Button } from '@mui/material';

import { LinkDraggerProps } from './link.types';
import InputHandler from '../InputHandler/input.handler';

function LinkDragger({ linkId, onDelete, data }: LinkDraggerProps) {
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
			{data.map((input, index) => (
				<InputHandler key={`input_${index}`} {...input} />
			))}
		</Stack>
	);
}

export default LinkDragger;
