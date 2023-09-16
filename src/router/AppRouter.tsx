import Login from '../pages/Auth/Auth';
import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from './paths';

let routes = [
	{
		path: PATHS.AUTH,
		element: <Login />,
	},
	{
		path: PATHS.HOME,
		element: <h1>Home</h1>,
	},
];

routes = routes.map((route) => ({
	...route,
}));

export const router = createBrowserRouter(routes);
