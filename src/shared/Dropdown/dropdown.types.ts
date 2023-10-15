import { SelectChangeEvent } from '@mui/material/Select';

export type DropdownItems = {
	value: string | number;
	label: string;
};
export interface DropdownProps {
	handleChange: (event: SelectChangeEvent) => void;
	label: string;
	value?: string | undefined;
	isRequired?: boolean;
	name: string;
	dropdownItems: DropdownItems[];
	defaultValue: string | undefined;
}
