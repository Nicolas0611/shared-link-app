import { TabOwnProps, Tabs as TabsController } from '@mui/material';
import Tab from '../Tabs/tabs.styled';
import { TabProps } from './tabs.types';

function Tabs({ tabs, handleChange, value }: TabProps) {
	return (
		<TabsController
			sx={{ '& .MuiTabs-indicator': { display: 'none' } }}
			value={value}
			onChange={handleChange}
			textColor="primary"
		>
			{tabs.map((tab: TabOwnProps, index: number) => (
				<Tab key={index} value={tab.value as string} label={tab.label} />
			))}
		</TabsController>
	);
}

export default Tabs;
