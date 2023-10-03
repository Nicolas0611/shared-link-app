import { LayoutLabelContentProps } from '../../shared/AuthLayout/AuthLayoutInterfaces';
import { InitialValues, InputDataProps } from './InputsInterfaces';

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

export const layoutLabelContent: LayoutLabelContentProps = {
	login: {
		title: 'Login',
		description: 'Add your details below to get back into the app',
		subDescription: 'Don’t have an account',
		linkLabel: 'Register',
		link: '/auth#signup', //!TODO :REPLACE WITH THE REAL PATH CONSTANT
	},
	signup: {
		title: 'Create account',
		description: 'Let’s get you started sharing your links!',
		subDescription: 'Already have an account?',
		linkLabel: 'Login',
		link: '/auth#login', //!TODO :REPLACE WITH THE REAL PATH CONSTANT
	},
};
