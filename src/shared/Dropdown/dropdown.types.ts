import { SelectProps } from '@mui/material/Select';

export type DropdownItemsTypes = {
	value: string | number;
	label: string;
};
export interface DropdownProps extends SelectProps {
	options: DropdownItemsTypes[];
}
