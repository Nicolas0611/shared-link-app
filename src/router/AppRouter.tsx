import Login from '../pages/Auth/auth';
import {
	NonIndexRouteObject,
	createBrowserRouter,
	redirect,
} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { PATHS, HASH_PATHS } from './paths';
import Home from '../pages/Home/home';
import { auth } from '../libs/firebase/firebase.config';

interface RouteProps extends NonIndexRouteObject {
	isPrivate?: boolean;
}

const privateRouteLoader = async () => {
	const isUserActive = await new Promise((resolve, reject) =>
		onAuthStateChanged(
			auth,
			(user) => resolve(user),
			(e) => reject(e)
		)
	);
	if (!isUserActive) return redirect(`${PATHS.AUTH}${HASH_PATHS.LOGIN}`);

	return null;
};

let routes: RouteProps[] = [
	{
		path: PATHS.AUTH,
		element: <Login />,
	},
	{
		path: PATHS.ROOT,
		element: <Home />,
		isPrivate: true,
	},
];

routes = routes.map((route) => ({
	...route,
	loader: route.isPrivate ? privateRouteLoader : undefined,
}));

export const router = createBrowserRouter(routes);
