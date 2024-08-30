// // import { RouteObject } from 'react-router/dist/lib/context';
// // import { About, AboutDetail } from '@/pages/About';
// // import { Home } from '@/pages/Home';
// // import { Sidebar } from '@/components/layout';
// import SignInScreen from '@/pages/auth/screens/SignInScreen/SignInScreen';
// import { ROUTE_PATH } from '@/constants/routePath.constant';
// import ProtectedLayout from '@/components/layout/ProtectedLayout/ProtectedLayout';
// import { Home } from '@/pages/Home';

// const routes = [
// 	{
// 		path: ROUTE_PATH.AUTH.LOGIN,
// 		element: <SignInScreen />
// 	},
// 	{
// 		path: ROUTE_PATH.HOME.INDEX,
// 		layout: ProtectedLayout,
// 		element: <Home />
// 		// children: [
// 		// 	{
// 		// 		path: '',
// 		// 		element: <Home />
// 		// 	}
// 		// ]
// 	}
// ];

// export { routes };

import { RouteObject } from 'react-router-dom';
import SignInScreen from '@/pages/auth/screens/SignInScreen/SignInScreen';
import ProtectedLayout from '@/components/layout/ProtectedLayout/ProtectedLayout';
// import Home from '@/pages/Home';
import { ROUTE_PATH } from '@/constants/routePath.constant';
import { Home } from '@/pages/Home';

const routes: RouteObject[] = [
	{
		// path: ROUTE_PATH.AUTH.LOGIN,
		path: ROUTE_PATH.ROOT.INDEX,
		element: <SignInScreen />
	},
	{
		path: ROUTE_PATH.HOME.INDEX,
		element: <ProtectedLayout />, // Sử dụng ProtectedLayout để bảo vệ các route bên trong
		children: [
			{
				path: '', // Route chính khi vào dashboard
				element: <Home />
			}
			// Thêm các route con khác nếu cần
		]
	},
	// Route not found
	{
		path: ROUTE_PATH.NOTFOUND.INDEX,
		element: <div>Page not found</div>
	}
];

export { routes };
