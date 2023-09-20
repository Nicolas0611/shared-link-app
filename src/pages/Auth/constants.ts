import {
	InitialValues,
	InputDataProps,
} from '../../shared/AuthLayout/interfaces/InputsInterfaces';

//Data
export const initialLoginInputData: InitialValues = {
	email: '',
	password: '',
};

export const initialRegisterInputData: InitialValues = {
	...initialLoginInputData,
	confirm_password: '',
};

export const inputsAuthData: InputDataProps = {
	login: [
		{ type: 'email', label: 'Email', name: 'email', value: 'email' },
		{
			type: 'password',
			label: 'Password',
			name: 'password',
		},
	],
	signup: [
		{ type: 'email', label: 'Email Adress', name: 'email', value: 'email' },
		{
			type: 'password',
			label: 'Create Password',
			name: 'password',
			value: 'email',
		},
		{
			type: 'password',
			label: 'Confirm Password',
			name: 'confirm_password',
		},
	],
};
