import { TabOwnProps } from '@mui/material';

export interface TabProps {
	tabs: TabOwnProps[];
	handleChange: (event: React.SyntheticEvent, newValue: string) => void;
	value: number | string | string[];
}
