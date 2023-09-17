import {
	Container,
	Button,
	Stack,
	TextField,
	TextFieldProps,
} from '@mui/material';
import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import AuthLayout from '../../shared/AuthLayout/AuthLayout';
import { PATHS, HASH_PATHS } from '../../router/paths';
import {
	InputDataProps,
	initialLoginInputData,
	initialRegisterInputData,
	inputsAuthData,
} from './constants';
import { AuthLayoutProps } from '../../shared/AuthLayout/interfaces/AuthLayoutInterfaces';

interface InitialValues {
	email: string;
	password: string;
}

function Auth() {
	type ActiveTabProps = keyof InputDataProps;
	const navigate = useNavigate();
	const { hash } = useLocation();
	const [activeTab, setActiveTab] = useState<ActiveTabProps>('login');

	useEffect(() => {
		if (!hash) {
			navigate(`${PATHS.AUTH}${HASH_PATHS.LOGIN}`);
		}
		const tab = hash?.replace('#', '');
		setActiveTab(tab);
	}, [hash]);

	const AuthLayoutLabels = (hashValue: string | number): AuthLayoutProps => {
		type LayoutLabelContentProps = {
			[key: string]: AuthLayoutProps;
		};
		const layoutLabelContent: LayoutLabelContentProps = {
			login: {
				title: 'Login',
				description: 'Add your details below to get back into the app',
				subDescription: 'Don’t have an account',
				linkLabel: 'Login',
				link: '/auth#signup', //!TODO :REPLACE WITH THE REAL PATH CONSTANT
			},
			signup: {
				title: 'Create account',
				description: 'Let’s get you started sharing your links!',
				subDescription: 'Already have an account?',
				linkLabel: 'Register',
				link: '/auth#login', //!TODO :REPLACE WITH THE REAL PATH CONSTANT
			},
		};
		return layoutLabelContent[hashValue];
	};

	const InitialValues = (hashValue: 'login' | 'signup') => {
		const initialFormValues = {
			login: initialLoginInputData,
			signup: initialRegisterInputData,
		};
		return initialFormValues[hashValue];
	};

	return (
		<>
			<Container
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh',
				}}
			>
				<AuthLayout
					title={AuthLayoutLabels(activeTab)?.title}
					description={AuthLayoutLabels(activeTab)?.description}
					subDescription={AuthLayoutLabels(activeTab)?.subDescription}
					linkLabel={AuthLayoutLabels(activeTab)?.linkLabel}
					link={AuthLayoutLabels(activeTab)?.link}
				>
					<Formik
						enableReinitialize={true}
						initialValues={InitialValues(activeTab as 'login' | 'signup')}
						validate={(values) => {
							const errors: Partial<InitialValues> = {};
							if (!values.email) {
								errors.email = 'Required';
							} else if (
								!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
							) {
								errors.email = 'Invalid email address';
							}
							return errors;
						}}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								setSubmitting(false);
							}, 400);
						}}
					>
						{({
							values,
							handleChange,
							handleSubmit,
							isSubmitting,
							/* and other goodies */
						}) => (
							<Form onSubmit={handleSubmit}>
								<Stack direction="column" spacing={2}>
									{inputsAuthData[activeTab || 'login'].map(
										(input: TextFieldProps, index: number) => (
											<TextField
												key={index}
												value={(input.name && values[input.name]) || ''}
												onChange={handleChange}
												name={input.name}
												type={input.type}
												label={input.label}
												variant="outlined"
											/>
										)
									)}

									<Button
										variant="contained"
										color="primary"
										disabled={isSubmitting}
										type="submit"
										size="large"
									>
										{hash === '#login' ? 'Login' : 'Register'}
									</Button>
								</Stack>
							</Form>
						)}
					</Formik>
				</AuthLayout>
			</Container>
		</>
	);
}

export default Auth;
