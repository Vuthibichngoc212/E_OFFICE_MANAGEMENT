import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes as dRoutes } from '@/routes/routes';
import { sidebarRoutes } from './sidebarRoutes';

const useRouter = () => {
	const makeNavigate = useNavigate();
	const [routes, setRoutes] = useState<any[]>([]);
	const [sidebar, setSideBar] = useState<any[]>();
	const [activeRoute, setActiveRoute] = useState<any>();
	useEffect(() => {
		setSideBar(sidebarRoutes);
		setRoutes(dRoutes);
	}, []);
	const navigate = (route: string) => {
		const newRoute = routes.find((item) => item.path === route);
		if (!newRoute) {
			return;
		}

		setActiveRoute(newRoute);
		makeNavigate(route);
	};
	const isAllowRoute = (path: string) => {
		if (path === '') {
			return false;
		}
		return true;
	};

	return {
		routes,
		sidebar,
		isAllowRoute,
		navigate,
		activeRoute,
		setActiveRoute
	};
};

export default useRouter;
