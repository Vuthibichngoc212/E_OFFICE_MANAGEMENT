import { RouteObject } from 'react-router/dist/lib/context';
import { About, AboutDetail } from '@/pages/About';
import { Home } from '@/pages/Home';
import { DefaultLayout, SidebarLayout } from '@/components/layout';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <SidebarLayout />,
		children: [
			{
				path: '',
				element: <Home />
			}
		]
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

export default routes;
