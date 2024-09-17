import { RouteObject } from 'react-router-dom';
import SignInScreen from '@/pages/auth/screens/SignInScreen/SignInScreen';
import ProtectedLayout from '@/components/layout/ProtectedLayout/ProtectedLayout';
import { ROUTE_PATH } from '@/constants/routePath.constant';
import { Home } from '@/pages/Home';
import DocumentType from '@/pages/categories/documentType/screens/DocumentType';

const routes: RouteObject[] = [
	{
		path: ROUTE_PATH.ROOT.INDEX,
		element: <SignInScreen />
	},
	{
		path: ROUTE_PATH.HOME.INDEX,
		element: <ProtectedLayout />,
		children: [
			{
				path: '',
				element: <Home />
			}
		]
	},
	{
		path: ROUTE_PATH.CATEGORY.INDEX,
		element: <ProtectedLayout />,
		children: [
			{
				path: ROUTE_PATH.CATEGORY.DOCUMENT_TYPE,
				element: <DocumentType />
			}
		]
	},
	{
		path: ROUTE_PATH.NOTFOUND.INDEX,
		element: <div>Page not found</div>
	}
];

export { routes };
