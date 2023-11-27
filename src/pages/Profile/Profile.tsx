import { Box, Typography, Button } from '@mui/material';
import { Form, Formik } from 'formik';

import Application from '../../layout/Application/application.layout';
import Dropzone from '../../shared/Dropzone/dropzone';
import InputHandler from '../../shared/InputHandler/input.handler';
import { initialProfileValues } from './constants';
import { dataProfileInputs } from './profile.data';
//todo: start profile

function Profile() {
	return (
		<Application
			title="Profile Details"
			subtitle="Add your details to create a personal touch to your profile."
		>
			<Box display="flex" flexDirection="column" gap={2}>
				<Formik
					initialValues={initialProfileValues}
					onSubmit={(values) => {
						console.log(values);
					}}
				>
					{({ values, handleChange }) => {
						return (
							<Form
								style={{
									display: 'flex',
									flexDirection: 'column',
									gap: '1rem',
								}}
							>
								<Box
									display="flex"
									padding="1.25rem"
									alignItems="center"
									justifyContent="space-between"
									sx={{
										backgroundColor: 'background.default',
										width: '100%',
										borderRadius: '12px',
									}}
								>
									<Typography variant="body1" color={'text.disabled'}>
										Profile Picture
									</Typography>
									<Dropzone
										name="file"
										size="md"
										variant="outlined"
										acceptedFormats=".jpg, .png"
									/>
								</Box>
								<Box
									display="flex"
									flexDirection="column"
									gap={2}
									padding="1.25rem"
									justifyContent="space-between"
									sx={{
										backgroundColor: 'background.default',
										width: '100%',
										borderRadius: '12px',
									}}
								>
									{dataProfileInputs({ handleChange, values }).map(
										(input, index) => (
											<Box
												display="flex"
												alignItems="center"
												justifyContent="space-between"
												key={`container_${index}`}
											>
												<Typography variant="body1" color={'text.disabled'}>
													{input.label} {input.required && '*'}
												</Typography>
												<Box width={'70%'}>
													<InputHandler key={`input_${index}`} {...input} />
												</Box>
											</Box>
										)
									)}
								</Box>
								<Box display="flex" justifyContent="end">
									<Button
										type="submit"
										variant="contained"
										color="primary"
										size="large"
									>
										Save
									</Button>
								</Box>
							</Form>
						);
					}}
				</Formik>
			</Box>
		</Application>
	);
}

export default Profile;
