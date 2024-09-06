/// <reference types="vite-plugin-svgr/client" />
import { ROUTE_PATH } from '@/constants/routePath.constant';

import overview from '@/assets/icons/overview1.svg?react';
import documentText from '@/assets/icons/DocumentText.svg?react';
import category from '@/assets/icons/category.svg?react';
import contract from '@/assets/icons/contract.svg?react';
import infor from '@/assets/icons/infor.svg?react';
import job from '@/assets/icons/job.svg?react';
// import search from '@/assets/icons/search.svg?react';
import permission from '@/assets/icons/permission.svg?react';
// import seting from '@/assets/icons/seting.svg?react';

export const sidebarRoutes = [
	{
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
		icon: documentText,
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
		path: ROUTE_PATH.CATEGORY.INDEX,
		name: 'Quản lý danh mục',
		label: 'Devices',
		icon: category,
		children: [
			{
				path: ROUTE_PATH.CATEGORY.DOCUMENT_REGISTRATION,
				name: 'Danh sách sổ đăng ký văn bản',
				label: 'Incoming documents',
				icon: null
			},
			{
				path: ROUTE_PATH.CATEGORY.DOCUMENT_TYPE,
				name: 'Danh sách loại văn bản',
				label: 'Outgoing documents',
				icon: null
			},
			{
				path: ROUTE_PATH.CATEGORY.ISSUING_AUTHORITY,
				name: 'Danh sách nơi ban hành',
				label: 'Internal documents',
				icon: null
			},
			{
				path: ROUTE_PATH.CATEGORY.DEPARTMENT,
				name: 'Danh sách phòng ban',
				label: 'Internal documents',
				icon: null
			}
		]
	},
	{
		path: ROUTE_PATH.CONTACT.INDEX,
		name: 'Quản lý hợp đồng',
		label: 'Devices',
		icon: contract,
		children: [
			{
				path: ROUTE_PATH.CONTACT.CONTRACT_LIST,
				name: 'Danh sách hợp đồng',
				label: 'Incoming documents',
				icon: null
			},
			{
				path: ROUTE_PATH.CONTACT.CONTACT_TEMPLATE,
				name: 'Danh sách mẫu hợp đồng',
				label: 'Outgoing documents',
				icon: null
			},
			{
				path: ROUTE_PATH.CONTACT.INFOR_CLIENT,
				name: 'Danh sách thông tin khách hàng',
				label: 'Internal documents',
				icon: null
			}
		]
	},
	{
		path: ROUTE_PATH.PROJECT.INDEX,
		name: 'Quản lý thông tin dự án',
		label: 'Devices',
		icon: infor,
		children: [
			{
				path: ROUTE_PATH.PROJECT.PROJECT_LIST,
				name: 'Danh sách dự án',
				label: 'Incoming documents',
				icon: null
			}
		]
	},
	{
		path: ROUTE_PATH.TASK_MANAGEMENT.INDEX,
		name: 'Quản lý công việc',
		label: 'Devices',
		icon: job,
		children: [
			{
				path: ROUTE_PATH.TASK_MANAGEMENT.APPROVE_DOCUMENTS,
				name: 'Phê duyệt hồ sơ văn bản',
				label: 'Incoming documents',
				icon: null
			},
			{
				path: ROUTE_PATH.TASK_MANAGEMENT.UPDATE_PROGRESS,
				name: 'Cập nhật tiến độ xử lý',
				label: 'Outgoing documents',
				icon: null
			},
			{
				path: ROUTE_PATH.TASK_MANAGEMENT.REPORT,
				name: 'Báo cáo công việc',
				label: 'Internal documents',
				icon: null
			},
			{
				path: ROUTE_PATH.TASK_MANAGEMENT.CREATE_TASK,
				name: 'Tạo công việc',
				label: 'Internal documents',
				icon: null
			},
			{
				path: ROUTE_PATH.TASK_MANAGEMENT.TASK_LIST,
				name: 'Danh sách công việc',
				label: 'Internal documents',
				icon: null
			}
		]
	},
	// {
	// 	path: ROUTE_PATH.DEVICE.LIST,
	// 	name: 'Tìm kiếm thống kê',
	// 	label: 'Devices',
	// 	icon: search,
	// 	children: []
	// },

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
