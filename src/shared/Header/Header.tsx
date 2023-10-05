import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { Box, Button } from '@mui/material';
import LinkIcon from '../../assets/LinkIcon';
import Tabs from '../Tabs/tabs';
import { PATHS } from '../../router/paths';

function Header() {
	const [value, setValue] = useState(PATHS.ROOT);
	const navigate = useNavigate();

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		event.preventDefault();
		setValue(newValue);
		navigate(newValue);
	};

	const TabsData = [
		{ value: '/', label: 'Link' },
		{ value: '/profile-details', label: 'Profile Details' },
	];

	return (
		<Box
			sx={{
				minHeight: 78,
				backgroundColor: 'background.paper',
				margin: '1.5rem 1.5rem',
				padding: '0 1.54rem',
				borderRadius: '0.75rem',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<LinkIcon />

			<Tabs tabs={TabsData} handleChange={handleChange} value={value} />

			<Button variant="outlined">Preview</Button>
		</Box>
	);
}

export default Header;
