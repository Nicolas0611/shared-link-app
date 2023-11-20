import Dropdown from '../Dropdown/dropdown';
import { TextField } from '@mui/material';

import { InputHandlerProps } from './input.handler.types';

const InputHandler = ({ type, options, ...props }: InputHandlerProps) => {
	switch (type) {
		case 'dropdown':
			return <Dropdown options={options!} {...props} />;
		case 'text':
			return <TextField {...props} />;
		default:
			return null;
	}
};

export default InputHandler;
