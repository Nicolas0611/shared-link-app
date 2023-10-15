import { useContext } from 'react';
import { Stack, Typography, Box, Button, TextField } from '@mui/material';
import { Formik, Form, FieldArray, Field } from 'formik';

import Application from '../../layout/Application/application.layout';
import LinkDragger from '../../shared/LinkDragger/link.dragger';
import { Scrollable } from '../../shared/Scrollable/scrollable.styled';
import DefaultImage from '../../assets/DefaultImage';
import Default from '../../shared/Default/default';
import { LinkDraggerContext } from '../../context/LinkDragger/link.context';

function Home() {
	const { linkContext, setLinkContext } = useContext(LinkDraggerContext);
	type InitialValues = {
		data: Array<{ link: string; platform: string }>;
	};

	const initialValues: InitialValues = {
		data: [], // Start with an empty array
	};

	return (
		<Application>
			<Box
				height={'100%'}
				display={'flex'}
				flexDirection={'column'}
				gap={{ lg: '1.2rem', xl: '2.2rem' }}
			>
				<Box>
					<Typography variant="h4" sx={{ fontWeight: 'bold' }}>
						Customize your links
					</Typography>
					<Typography variant="body1" color={'text.disabled'}>
						Add/edit/remove links below and then share all your profiles with
						the world!
					</Typography>
				</Box>

				<Formik
					initialValues={initialValues}
					onSubmit={(values) => console.log(values)}
				>
					{({ values, handleChange }) => (
						<Form style={{ marginTop: '0', height: '100%' }}>
							<FieldArray name="data">
								{({ remove, push }) => (
									<Stack height={'100%'}>
										<Box sx={{ paddingBottom: '2rem' }}>
											<Button
												fullWidth
												onClick={() => push({ link: '', platform: '' })}
												variant="outlined"
												color="primary"
												size="large"
											>
												Add new link
											</Button>
										</Box>
										{values.data.length !== 0 ? (
											<Box sx={{ height: '100%' }}>
												<Box
													display="flex"
													flexDirection="column"
													gap={2}
													sx={{
														maxHeight: {
															xs: '10rem', // Default value for extra small screens
															sm: '20rem',
															md: 400,
															lg: 440,
															xl: 'calc(75%)',
														},
													}}
												>
													<Scrollable maxHeight={'inherit'} gap={2}>
														{values.data.map((content, index) => (
															<div key={index}>
																<LinkDragger
																	values={values.data[index]}
																	dropdownName={`data[${index}].platform`}
																	inputName={`data.${index}.link`}
																	key={`Link#_${index}`}
																	linkId={index}
																	onDelete={remove}
																	handleInputChange={handleChange}
																/>
															</div>
														))}
													</Scrollable>
													<Box display="flex" justifyContent="end">
														<Button
															type="submit"
															variant="contained"
															color="primary"
															size="large"
															disabled={false}
														>
															Save
														</Button>
													</Box>
												</Box>
											</Box>
										) : (
											<Default
												Image={DefaultImage}
												title="Let’s get you started"
												subtitle="Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!"
											/>
										)}
									</Stack>
								)}
							</FieldArray>
						</Form>
					)}
				</Formik>
			</Box>
		</Application>
	);
}

export default Home;
