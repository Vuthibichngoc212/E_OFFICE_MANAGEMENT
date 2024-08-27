import { RouteObject } from 'react-router/dist/lib/context';
import { About, AboutDetail } from '@/pages/About';
// import { Home } from '@/pages/Home';
import { DefaultLayout } from '@/components/layout';
import SignInScreen from '@/pages/auth/SignInScreen/SignInScreen';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <SignInScreen />
		// element: <Sidebar />
		// children: [
		// 	{
		// 		path: '',
		// 		element: <Home />
		// 	}
		// ]
	},
	{
		path: 'about',
		element: <DefaultLayout />,
		children: [
			{
				path: '',
				element: <About />
			},
			{
				path: ':id',
				element: <AboutDetail />
			}
		]
	}
];

export { routes };
