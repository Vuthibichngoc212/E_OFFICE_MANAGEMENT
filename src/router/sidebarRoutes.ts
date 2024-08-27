/// <reference types="vite-plugin-svgr/client" />
import { ROUTE_PATH } from '@/constants/routePath.constant';

import overview from '@/assets/icons/overview1.svg?react';
import company from '@/assets/icons/company.svg?react';
import device from '@/assets/icons/device.svg?react';
import permission from '@/assets/icons/permission.svg?react';
import seting from '@/assets/icons/seting.svg?react';

export const sidebarRoutes = [
	{
		path: ROUTE_PATH.ROOT.INDEX,
		name: 'Tổng quan',
		label: 'Dashboard',
		icon: overview,
		children: []
	},
	{
		path: ROUTE_PATH.COMPANY.INDEX,
		name: 'Công ty',
		label: 'Companies',
		icon: company,
		children: []
	},
	{
		path: ROUTE_PATH.DEVICE.LIST,
		name: 'Quản lý thiết bị',
		label: 'Devices',
		icon: device,
		children: []
	},

	{
		path: ROUTE_PATH.PERMISSION.INDEX,
		name: 'Phân quyền',
		label: 'permissions',
		icon: permission,
		children: []
	},
	{
		path: ROUTE_PATH.SETTING.INDEX,
		name: 'Cài đặt',
		label: 'setting',
		icon: seting,
		children: []
	}
];
