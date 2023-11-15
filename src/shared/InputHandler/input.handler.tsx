import Dropdown from '../Dropdown/dropdown';
import { TextField } from '@mui/material';

import { InputHandlerProps } from './input.handler.types';

const InputHandler = ({ type, dropdownItems, ...props }: InputHandlerProps) => {
	switch (type) {
		case 'dropdown':
			return <Dropdown dropdownItems={dropdownItems!} {...props} />;
		case 'text':
			return <TextField {...props} />;
		default:
			return null;
	}
};

export default InputHandler;
