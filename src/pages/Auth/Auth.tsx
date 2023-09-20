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
	initialLoginInputData,
	initialRegisterInputData,
	inputsAuthData,
} from './constants';
import { AuthLayoutProps } from '../../shared/AuthLayout/interfaces/AuthLayoutInterfaces';
import { firebaseAuth } from '../../network/firebaseAuth';

interface InitialValues {
	email: string;
	password: string;
}

function Auth() {
	type ActiveTabProps = 'login' | 'signup';
	const navigate = useNavigate();
	const { hash } = useLocation();
	const [activeTab, setActiveTab] = useState<ActiveTabProps>('login');

	useEffect(() => {
		if (!hash) {
			navigate(`${PATHS.AUTH}${HASH_PATHS.LOGIN}`);
		} else {
			const tab = hash?.replace('#', '');
			if (tab === 'login' || tab === 'signup') {
				setActiveTab(tab);
			}
		}
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
		return layoutLabelContent[hashValue];
	};

	const InitialValues = (hashValue: ActiveTabProps) => {
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
						initialValues={InitialValues(activeTab)}
						validate={(values) => {
							//TODO: ADD VALIDATIONS CORRESPONDING TO SIGNUP AND LOGIN
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
							const { email, password } = values;
							//TODO: ADD ONLOADING / ONSUCESS AND ONERROR TO DISPLAY WITH A COGOTAST
							firebaseAuth({
								authType: activeTab,
								values: { email, password },
							});
							setSubmitting(false);
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
									{inputsAuthData[activeTab].map(
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
