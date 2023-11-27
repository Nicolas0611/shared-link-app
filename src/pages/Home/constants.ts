import { DropdownItemsTypes } from '../../shared/Dropdown/dropdown.types';
import { InitialValues } from './home.types';

const options = [
	{ label: 'Github', value: 'github' },
	{ label: 'Twitter', value: 'twitter' },
	{ label: 'LinkedIn', value: 'linkedin' },
	{ label: 'Youtube', value: 'youtube' },
	{ label: 'Facebook', value: 'facebook' },
];
interface DataInputHomeProps {
	index: number;
	values: InitialValues;
	handleChange: {
		(e: React.ChangeEvent<any>): void;
		<T = string | React.ChangeEvent<any>>(
			field: T
		): T extends React.ChangeEvent<any>
			? void
			: (e: string | React.ChangeEvent<any>) => void;
	};
}

export type InputConfig<T> = {
	type: 'dropdown' | 'text';
	options?: Array<T>;
	name: string;
	defaultValue?: string;
	value: string;
	required: boolean;
	label: string;
	variant?: string;
	onChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
};

export const dataHomeInputs = ({
	index,
	values,
	handleChange,
}: DataInputHomeProps): InputConfig<DropdownItemsTypes>[] => {
	return [
		{
			type: 'dropdown',
			options,
			name: `data[${index}].platform`,
			defaultValue: '',
			value: values.data[index].platform || '',
			required: true,
			label: 'Choose a platform',
			onChange: handleChange,
		},
		{
			type: 'text',
			name: `data.${index}.link`,
			value: values.data[index].link || '',
			required: true,
			label: 'Attach your link',
			variant: 'outlined',
			onChange: handleChange,
		},
	];
};
