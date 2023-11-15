import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { DropdownItemsTypes, DropdownProps } from './dropdown.types';

function Dropdown({
	onChange,
	label,
	value,
	dropdownItems,
	name = '',
	required = false,
	defaultValue,
}: DropdownProps) {
	return (
		<FormControl fullWidth>
			<InputLabel id="select-label">{label}</InputLabel>
			<Select
				name={name}
				labelId="select-label"
				id="demo-simple-select"
				defaultValue={defaultValue}
				value={value || ''}
				label={label}
				onChange={onChange}
				required={required}
			>
				{dropdownItems.map((item: DropdownItemsTypes) => (
					<MenuItem key={item.label} value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

export default Dropdown;
