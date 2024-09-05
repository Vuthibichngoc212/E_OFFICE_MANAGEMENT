/// <reference types="vite-plugin-svgr/client" />
import { ROUTE_PATH } from '@/constants/routePath.constant';

import overview from '@/assets/icons/overview1.svg?react';
import document from '@/assets/icons/document.svg?react';
import category from '@/assets/icons/category.svg?react';
import contract from '@/assets/icons/contract.svg?react';
import infor from '@/assets/icons/infor.svg?react';
import job from '@/assets/icons/job.svg?react';
import search from '@/assets/icons/search.svg?react';
import permission from '@/assets/icons/permission.svg?react';
// import seting from '@/assets/icons/seting.svg?react';

export const sidebarRoutes = [
	{
		// path: ROUTE_PATH.ROOT.INDEX,
		path: ROUTE_PATH.HOME.INDEX,
		name: 'Tổng quan',
		label: 'Dashboard',
		icon: overview,
		children: []
	},
	{
		path: ROUTE_PATH.DOCUMENT.INDEX,
		name: 'Quản lý văn bản',
		label: 'Document management',
		icon: document,
		children: [
			{
				path: ROUTE_PATH.DOCUMENT.INCOMING,
				name: 'Văn bản đến',
				label: 'Incoming documents',
				// resource: 'email',
				icon: null
			},
			{
				path: ROUTE_PATH.DOCUMENT.OUTGOING,
				name: 'Văn bản đi',
				label: 'Outgoing documents',
				// resource: 'sent_email',
				icon: null
			},
			{
				path: ROUTE_PATH.DOCUMENT.INTERNAL,
				name: 'Văn bản nội bộ',
				label: 'Internal documents',
				// resource: 'sent_email',
				icon: null
			}
		]
	},
	{
		path: ROUTE_PATH.DEVICE.LIST,
		name: 'Quản lý danh mục',
		label: 'Devices',
		icon: category,
		children: []
	},
	{
		path: ROUTE_PATH.DEVICE.LIST,
		name: 'Quản lý hợp đồng',
		label: 'Devices',
		icon: contract,
		children: []
	},
	{
		path: ROUTE_PATH.DEVICE.LIST,
		name: 'Quản lý thông tin dự án',
		label: 'Devices',
		icon: infor,
		children: []
	},
	{
		path: ROUTE_PATH.DEVICE.LIST,
		name: 'Quản lý công việc',
		label: 'Devices',
		icon: job,
		children: []
	},
	{
		path: ROUTE_PATH.DEVICE.LIST,
		name: 'Tìm kiếm thống kê',
		label: 'Devices',
		icon: search,
		children: []
	},

	{
		path: ROUTE_PATH.PERMISSION.INDEX,
		name: 'Phân quyền',
		label: 'permissions',
		icon: permission,
		children: []
	}
	// {
	// 	path: ROUTE_PATH.SETTING.INDEX,
	// 	name: 'Cài đặt',
	// 	label: 'setting',
	// 	icon: seting,
	// 	children: []
	// }
];
