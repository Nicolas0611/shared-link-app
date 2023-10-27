import { useContext, useEffect } from 'react';
import { Stack, Typography, Box, Button } from '@mui/material';
import { Formik, Form, FieldArray } from 'formik';

import Application from '../../layout/Application/application.layout';
import LinkDragger from '../../shared/LinkDragger/link.dragger';
import { Scrollable } from '../../shared/Scrollable/scrollable.styled';
import DefaultImage from '../../assets/DefaultImage';
import Default from '../../shared/Default/default';
import { LinkDraggerContext } from '../../context/LinkDragger/link.context';
import {
	addCustomLinks,
	getCustomLinks,
} from '../../network/firebaseActions/firebaseUserActions';
import { initialValues } from './home.types';

function Home() {
	//todo: CHECK IF THE USER HAVE LINKS, IF IT HAVE LINKS UPDATE THEM.
	//TODO: TRY TO UPDATE LINKS WITH AN USEFFECT APPROACH
	const { setLinkContext } = useContext(LinkDraggerContext);

	/* 	useEffect(() => {
		const getLinks = async () => {
			await getCustomLinks();
		};
		getLinks();
	}, []); */

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
					onSubmit={async (values) => {
						await addCustomLinks(values);
						//TODO:EMPTY THE STATE
					}}
				>
					{({ values, handleChange }) => {
						return (
							<Form style={{ marginTop: '0', height: '100%' }}>
								<FieldArray name="data">
									{({
										remove,
										push,
									}: {
										remove<T>(index: number): T | undefined;
										push: (obj: Link) => void;
									}) => (
										<Stack height={'100%'}>
											<Box sx={{ paddingBottom: '2rem' }}>
												<Button
													fullWidth
													onClick={() => {
														if (values.data.length < 5) {
															push({ link: '', platform: '' });
														}
													}}
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
																xs: '10rem',
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
																		content={content}
																		values={values.data[index]}
																		dropdownName={`data[${index}].platform`}
																		inputName={`data.${index}.link`}
																		key={`Link#_${index}`}
																		linkId={index}
																		onDelete={() => {
																			remove(index);
																			setLinkContext((prevState) => ({
																				...prevState,
																				data: prevState.data.filter(
																					(_, LinkIndex) => index !== LinkIndex
																				),
																			}));
																		}}
																		handleInputChange={(
																			e: React.ChangeEvent<HTMLInputElement>
																		) => {
																			handleChange(e);

																			setLinkContext((prevState) => ({
																				...prevState,
																				data: values.data.map(
																					(_, itemIndex) => ({
																						platform:
																							values.data[itemIndex].platform,
																						link:
																							itemIndex === index
																								? e.target.value
																								: values.data[itemIndex].link,
																					})
																				),
																			}));
																		}}
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
						);
					}}
				</Formik>
			</Box>
		</Application>
	);
}

export default Home;
