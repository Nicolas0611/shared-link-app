import { CssBaseline, ThemeProvider } from '@mui/material';
import customTheme from './theme';

export default function CustomTheme({ children }: ParentComponent) {
	return (
		<ThemeProvider theme={customTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
