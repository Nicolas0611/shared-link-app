import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './router/AppRouter';
import { RouterProvider } from 'react-router-dom';

import CustomTheme from './libs/mui/theme.config';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CustomTheme>
			<RouterProvider router={router} />
		</CustomTheme>
	</React.StrictMode>
);
