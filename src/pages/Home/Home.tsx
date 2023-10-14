import { useContext } from 'react';
import { Stack, Typography, Box, Button, TextField } from '@mui/material';
import { Formik, Form, FieldArray, Field } from 'formik';

import Application from '../../layout/Application/application.layout';
import LinkDragger from '../../shared/LinkDragger/link.dragger';
import { Scrollable } from '../../shared/Scrollable/scrollable.styled';
import DefaultImage from '../../assets/DefaultImage';
import Default from '../../shared/Default/default';
import {
	DefaultLinksValue,
	LinkDraggerContext,
} from '../../context/LinkDragger/link.context';

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
			<Stack spacing={4}>
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
						<Form>
							<FieldArray name="data">
								{({ remove, push }) => (
									<Stack height={'100%'}>
										<Box sx={{ paddingBottom: '1rem' }}>
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
											<>
												<Scrollable maxHeight={'45%'} gap={2}>
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
												<Button
													type="submit"
													variant="contained"
													color="primary"
													size="large"
													disabled={false}
												>
													Save
												</Button>
											</>
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

				{/* {linkContext.activeLinks.length === 0 ? (
					<Scrollable spacing={2}>
						<Formik
							initialValues={{
								platform: '',
								link: '',
							}}
							onSubmit={(values) => {
								console.log(values);
							}}
						>
							{({ handleChange, handleSubmit }) => (
								<Form onSubmit={handleSubmit}>
									{linkContext.activeLinks.map((link) => (
										<LinkDragger
											key={link.linkId}
											linkId={link.linkId}
											onDelete={deleteLink}
											handleInputChange={handleChange}
										/>
									))}
									<Box display="flex" justifyContent="flex-end">
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
								</Form>
							)}
						</Formik>
					</Scrollable>
				) : (
					<Default
						Image={DefaultImage}
						title="Let’s get you started"
						subtitle="Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!"
					/>
				)} */}
			</Stack>
		</Application>
	);
}

export default Home;
