/// <reference types="vite-plugin-svgr/client" />
import { ROUTE_PATH } from '@/constants/routePath.constant';

import overview from '@/assets/icons/overview.svg?react';
import documentText from '@/assets/icons/DocumentText.svg?react';
import category from '@/assets/icons/category.svg?react';
import job from '@/assets/icons/job.svg?react';
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
		path: ROUTE_PATH.TASK_MANAGEMENT.INDEX,
		name: 'Task Management',
		label: 'Quản lý công việc',
		icon: job,
		children: [
			{
				path: ROUTE_PATH.TASK_MANAGEMENT.APPROVE_DOCUMENTS,
				name: 'Document Approval',
				label: 'Phê duyệt hồ sơ văn bản',
				icon: null
			},
			{
				path: ROUTE_PATH.TASK_MANAGEMENT.UPDATE_PROGRESS,
				name: 'Progress Update',
				label: 'Cập nhật tiến độ xử lý',
				icon: null
			},
			{
				path: ROUTE_PATH.TASK_MANAGEMENT.REPORT,
				name: 'Work Reporting',
				label: 'Báo cáo công việc',
				icon: null
			},
			{
				path: ROUTE_PATH.TASK_MANAGEMENT.CREATE_TASK,
				name: 'Task Creation',
				label: 'Tạo công việc',
				icon: null
			},
			{
				path: ROUTE_PATH.TASK_MANAGEMENT.TASK_LIST,
				name: 'Task Listing',
				label: 'Danh sách công việc',
				icon: null
			}
		]
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
