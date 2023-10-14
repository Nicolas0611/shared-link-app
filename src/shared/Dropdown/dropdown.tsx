import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { DropdownItems, DropdownProps } from './dropdown.types';

function Dropdown({
	handleChange,
	label,
	value,
	dropdownItems,
	name = '',
	isRequired = false,
}: DropdownProps) {
	return (
		<FormControl fullWidth>
			<InputLabel id="select-label">{label}</InputLabel>
			<Select
				name={name}
				required={isRequired}
				labelId="select-label"
				id="demo-simple-select"
				value={value}
				label={label}
				onChange={handleChange}
			>
				{dropdownItems.map((item: DropdownItems) => (
					<MenuItem key={item.label} value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

export default Dropdown;
