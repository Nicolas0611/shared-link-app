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

import AuthLayout from '../../layout/Auth/auth.layout';
import { PATHS, HASH_PATHS } from '../../router/paths';
import {
	initialLoginInputData,
	initialRegisterInputData,
	inputsAuthData,
	layoutLabelContent,
} from './constants';

import { firebaseAuth } from '../../network/firebaseAuth/firebaseAuth';
import { useConfirmation } from '../../hooks/useConfirmation';

interface InitialValues {
	email: string;
	password: string;
	confirm_password?: string;
}

function Auth() {
	type ActiveTabProps = 'login' | 'signup';
	const navigate = useNavigate();
	const { hash } = useLocation();
	const [activeTab, setActiveTab] = useState<ActiveTabProps>('login');
	const { handleOnError, handleOnSuccess } = useConfirmation();

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
					title={layoutLabelContent[activeTab]?.title}
					description={layoutLabelContent[activeTab]?.description}
					subDescription={layoutLabelContent[activeTab]?.subDescription}
					linkLabel={layoutLabelContent[activeTab]?.linkLabel}
					link={layoutLabelContent[activeTab]?.link}
				>
					<Formik
						enableReinitialize={true}
						initialValues={InitialValues(activeTab)}
						validate={(values) => {
							const errors: Partial<InitialValues> = {};
							if (values.confirm_password) {
								if (values.password !== values.confirm_password) {
									errors.confirm_password = 'The password should be the same';
								}
							}
							return errors;
						}}
						onSubmit={(values, { setSubmitting }) => {
							const { email, password } = values;
							firebaseAuth({
								authType: activeTab,
								values: { email, password },
								onSuccess: handleOnSuccess,
								onError: handleOnError,
							});
							setSubmitting(false);
						}}
					>
						{({
							errors,
							touched,
							values,
							handleChange,
							handleSubmit,
							isSubmitting,
							/* and other goodies */
						}) => (
							<Form onSubmit={handleSubmit}>
								<Stack direction="column" spacing={2}>
									{inputsAuthData[activeTab].map((input: TextFieldProps) => (
										<TextField
											key={input.name}
											value={(input.name && values[input.name]) || ''}
											onChange={handleChange}
											name={input.name}
											type={input.type}
											label={input.label}
											variant="outlined"
											required={true}
										/>
									))}
									{touched.confirm_password && errors.confirm_password}
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
