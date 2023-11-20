import * as React from 'react';
// eslint-disable-next-line import/default
import ReactDOM from 'react-dom/client';
import { router } from './router/AppRouter';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import CustomTheme from './libs/mui/theme.config';

// eslint-disable-next-line import/no-named-as-default-member
ReactDOM.createRoot(document.getElementById('root')!).render(
	<SnackbarProvider>
		<CustomTheme>
			<RouterProvider router={router} />
		</CustomTheme>
	</SnackbarProvider>
);
