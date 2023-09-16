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
			},
		},
	},
});

export default customTheme;
