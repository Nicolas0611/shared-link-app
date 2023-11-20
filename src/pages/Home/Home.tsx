import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Stack, Box, Button } from '@mui/material';
import { Formik, Form, FieldArray } from 'formik';

import Application from '../../layout/Application/application.layout';
import LinkDragger from '../../shared/LinkDragger/link.dragger';
import { Scrollable } from '../../shared/Scrollable/scrollable.styled';
import DefaultImage from '../../assets/DefaultImage';
import Default from '../../shared/Default/default';
import { LinkDraggerContext } from '../../context/LinkDragger/link.context';
import {
	addCustomLinks,
	getLinks,
} from '../../network/firebaseHome/HomeRequests';
import { initialValues } from './home.types';
import { useConfirmation } from '../../hooks/useConfirmation';
import { LinkProps } from '../../context/LinkDragger/link.types';
import { dataHomeInputs } from './constants';
import Loader from '../../shared/Loader/loader';

function Home() {
	//todo: think about redux-toolkit
	//todo: CHECK IF THE USER HAVE LINKS, IF IT HAVE LINKS UPDATE THEM.
	//todo: CHECK STATE WHEN CHANGING TAB
	//todo: check if for initial values is posible to set linkContext

	const { setLinkContext } = useContext(LinkDraggerContext);
	const { handleOnError, handleOnSuccess, setLoading, loading } =
		useConfirmation();
	const [temporalLinks, setTemporalLinks] = useState<LinkProps>(initialValues);

	const GetValues = (values: LinkProps) => {
		useEffect(() => {
			setLinkContext(values);
		}, [values]);
		return null;
	};

	useLayoutEffect(() => {
		const getCustomLinks = async () => {
			setLoading(true);
			await getLinks(handleOnError, handleOnSuccess, setTemporalLinks);
		};
		void getCustomLinks();
	}, []);

	if (loading) return <Loader />;
	return (
		<Application
			title="Customize your links"
			subtitle="Add/edit/remove links below and then share all your profiles with the world!"
		>
			<Formik
				initialValues={temporalLinks}
				onSubmit={async (values) => {
					setLoading(true);
					await addCustomLinks(values, handleOnSuccess, handleOnError);
				}}
			>
				{({ values, handleChange }) => {
					return (
						<Form style={{ marginTop: '0', height: '100%' }}>
							{GetValues(values)}
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
														{values.data.map((content, index) => {
															const linkData = dataHomeInputs({
																index,
																values,
																handleChange,
															});
															return (
																<div key={index}>
																	<LinkDragger
																		content={content}
																		data={linkData}
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
																	/>
																</div>
															);
														})}
													</Scrollable>
													<Box display="flex" justifyContent="end">
														<Button
															type="submit"
															variant="contained"
															color="primary"
															size="large"
															disabled={loading}
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
		</Application>
	);
}

export default Home;
