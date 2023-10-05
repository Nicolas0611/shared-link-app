import { Tab as MaterialTab, styled } from '@mui/material';

const Tab = styled(MaterialTab)({
	padding: '1.2rem 0rem',
	textTransform: 'none',
	'&.Mui-selected': {
		backgroundColor: '#EFEBFF',
		borderRadius: '0.5rem',
		borderBottom: 'unset',
	},
	'&.Mui-indicator': {
		backgroundColor: 'unset',
	},
	'& .MuiTabs-indicator': { display: 'none' },
});

export default Tab;
