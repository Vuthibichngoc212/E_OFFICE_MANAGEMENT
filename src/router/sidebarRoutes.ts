/// <reference types="vite-plugin-svgr/client" />
import { ROUTE_PATH } from '@/constants/routePath.constant';

import overview from '@/assets/icons/overview.svg?react';
import documentText from '@/assets/icons/DocumentText.svg?react';
import category from '@/assets/icons/category.svg?react';
import schedule from '@/assets/icons/schedule.svg?react';
import process from '@/assets/icons/process.svg?react';
import permission from '@/assets/icons/permission.svg?react';
import settings from '@/assets/icons/settings.svg?react';

export const sidebarRoutes = [
	{
		path: ROUTE_PATH.HOME.INDEX,
		name: 'Dashboard',
		label: 'Tổng quan',
		icon: overview,
		children: []
	},
	{
		path: ROUTE_PATH.DOCUMENT.INDEX,
		name: 'Document Management',
		label: 'Quản lý văn bản',
		icon: documentText,
		children: [
			{
				path: ROUTE_PATH.DOCUMENT.INCOMING,
				name: 'Incoming Documents',
				label: 'Văn bản đến',
				icon: null
			},
			{
				path: ROUTE_PATH.DOCUMENT.OUTGOING,
				name: 'Outgoing Documents',
				label: 'Văn bản đi',
				icon: null
			},
			{
				path: ROUTE_PATH.DOCUMENT.INTERNAL,
				name: 'Internal Documents',
				label: 'Văn bản nội bộ',
				icon: null
			}
		]
	},
	{
		path: ROUTE_PATH.CATEGORY.INDEX,
		name: 'Category Management',
		label: 'Quản lý danh mục',
		icon: category,
		children: [
			{
				path: ROUTE_PATH.CATEGORY.DOCUMENT_REGISTRATION,
				name: 'Document Registration',
				label: 'Danh sách sổ đăng ký văn bản',
				icon: null
			},
			{
				path: ROUTE_PATH.CATEGORY.DOCUMENT_TYPE,
				name: 'Document Type List',
				label: 'Danh sách loại văn bản',
				icon: null
			},
			{
				path: ROUTE_PATH.CATEGORY.ISSUING_AUTHORITY,
				name: 'Issuing Authority List',
				label: 'Danh sách nơi ban hành',
				icon: null
			},
			{
				path: ROUTE_PATH.CATEGORY.DEPARTMENT,
				name: 'Department List',
				label: 'Danh sách phòng ban',
				icon: null
			}
		]
	},
	{
		path: ROUTE_PATH.PROCESS.INDEX,
		name: 'process',
		label: 'Quản lý quy trình',
		icon: process,
		children: []
	},
	{
		path: ROUTE_PATH.SCHEDULE.INDEX,
		name: 'schedule',
		label: 'Quản lý lịch họp',
		icon: schedule,
		children: []
	},
	{
		path: ROUTE_PATH.SYSTEM.INDEX,
		name: 'System Setting',
		label: 'Thiết lập hệ thống',
		icon: permission,
		children: [
			{
				path: ROUTE_PATH.SYSTEM.ACCOUNTS,
				name: 'Account Management',
				label: 'Tài khoản',
				icon: null
			},
			{
				path: ROUTE_PATH.SYSTEM.PERMISSIONS,
				name: 'Permissions',
				label: 'Phân quyền',
				icon: null
			}
		]
	},
	{
		path: ROUTE_PATH.SETTING.INDEX,
		name: 'Settings',
		label: 'Cài đặt',
		icon: settings,
		children: []
	}
];
