import { useState } from 'react';
import { TabOwnProps, Tabs as TabsController } from '@mui/material';
import Tab from '../Tabs/tabs.styled';

function Tabs({ tabs }: { tabs: TabOwnProps[] }) {
	const [value, setValue] = useState('one');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<TabsController value={value} onChange={handleChange} textColor="primary">
			{tabs.map((tab: TabOwnProps, index: number) => (
				<Tab key={index} value={tab.value as string} label={tab.label} />
			))}
		</TabsController>
	);
}

export default Tabs;
