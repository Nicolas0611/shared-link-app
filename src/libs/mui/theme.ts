import { createTheme } from '@mui/material';

const customTheme = createTheme({
	typography: {
		fontFamily: ['Poppins', 'sans-serif'].join(','),
	},
	palette: {
		primary: {
			light: '#EFEBFF',
			main: '#633CFF',
			contrastText: '#BEADFF',
		},
		background: {
			default: '#FAFAFA',
			paper: 'white',
		},
		text: {
			primary: '#333333',
			secondary: '633CFF',
			disabled: '#737373',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					color: 'white',
					borderRadius: '0.5rem',
				},
				outlined: {
					textTransform: 'none',
					color: '#633CFF',
					borderRadius: '0.5rem',
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					'&.Mui-selected': {
						backgroundColor: '#EFEBFF',
						borderRadius: '0.5rem',
						borderBottom: 'unset',
					},
					'&.Mui-indicator': {
						backgroundColor: 'unset',
					},
				},
			},
		},
	},
});

export default customTheme;
