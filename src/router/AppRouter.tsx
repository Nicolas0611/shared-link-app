import Auth from '../pages/Auth/auth';
import {
	NonIndexRouteObject,
	createBrowserRouter,
	redirect,
} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { PATHS, HASH_PATHS } from './paths';
import { auth } from '../libs/firebase/firebase.config';
import Authenticated from '../layout/Authenticated/authenticated.layout';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';

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

const routes: NonIndexRouteObject[] = [
	{
		path: PATHS.ROOT,
		element: <Home />,
	},
	{
		path: PATHS.PROFILE_DETAILS,
		element: <Profile />,
	},
];

export const router = createBrowserRouter([
	{
		path: PATHS.AUTH,
		element: <Auth />,
	},
	{
		element: <Authenticated />,
		children: routes,
		loader: privateRouteLoader,
	},
]);
