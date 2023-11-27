import { InitialProfileType } from './constants';

interface DataInputsProfileProps {
	values: InitialProfileType;
	handleChange: {
		(e: React.ChangeEvent<any>): void;
		<T = string | React.ChangeEvent<any>>(
			field: T
		): T extends React.ChangeEvent<any>
			? void
			: (e: string | React.ChangeEvent<any>) => void;
	};
}
export const dataProfileInputs = ({
	handleChange,
	values,
}: DataInputsProfileProps) => {
	return [
		{
			type: 'text',
			name: 'first_name',
			value: values.first_name,
			required: true,
			label: 'First name',
			onChange: handleChange,
		},
		{
			type: 'text',
			name: 'last_name',
			value: values.last_name,
			required: true,
			label: 'Last name',
			onChange: handleChange,
		},
		{
			type: 'text',
			name: 'email',
			value: values.email,
			required: false,
			label: 'Email',
			onChange: handleChange,
		},
	].map((input) => ({
		...input,
		sx: { width: '100%' },
		variant: 'outlined',
	}));
};
