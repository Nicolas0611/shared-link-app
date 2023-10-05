import { Tab as MaterialTab, styled } from '@mui/material';

const Tab = styled(MaterialTab)({
	padding: '1.2rem ',
	textTransform: 'none',
	fontWeight: 'bold',
	'&.Mui-selected': {
		backgroundColor: '#EFEBFF',
		borderRadius: '0.5rem',
		borderBottom: 'unset',
	},
	'& .MuiTabs-indicator': { display: 'none' },
});

export default Tab;
