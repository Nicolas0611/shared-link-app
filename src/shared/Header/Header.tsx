import { useState } from 'react';
import { Box, Tabs, Tab, Button } from '@mui/material';

import LinkIcon from '../../assets/LinkIcon';

function Header() {
	const [value, setValue] = useState('one');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
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
			<Tabs
				value={value}
				onChange={handleChange}
				textColor="primary"
				aria-label="secondary tabs example"
				sx={{ '& .MuiTabs-indicator': { display: 'none' } }}
			>
				<Tab value="one" label="Item One" />
				<Tab value="two" label="Item Two" />
			</Tabs>
			<Button variant="outlined">Outlined</Button>
		</Box>
	);
}

export default Header;
