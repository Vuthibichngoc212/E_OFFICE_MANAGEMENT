export const ROUTE_PATH = {
	ROOT: {
		INDEX: '/'
	},
	HOME: {
		INDEX: '/dashboard'
	},
	AUTH: {
		LOGIN: '/login'
	},
	DOCUMENT: {
		INDEX: '/documents',
		INCOMING: '/documents/incoming',
		OUTGOING: '/documents/outgoing',
		INTERNAL: '/documents/internal'
	},
	CATEGORY: {
		INDEX: '/category',
		DOCUMENT_REGISTRATION: '/category/document-registration',
		DOCUMENT_TYPE: '/category/document-type',
		ISSUING_AUTHORITY: '/category/issuing-authority',
		DEPARTMENT: '/category/department'
	},
	TASK_MANAGEMENT: {
		INDEX: '/task-management',
		APPROVE_DOCUMENTS: '/task-management/approve-documents',
		UPDATE_PROGRESS: '/task-management/update-progress',
		REPORT: '/task-management/report',
		CREATE_TASK: '/task-management/create-task',
		TASK_LIST: '/task-management/task-list'
	},
	PERMISSION: {
		INDEX: '/permissions',
		ROLE_GROUPS: '/permissions/role-groups',
		PERMISSION_LIST: '/permissions/permission-list',
		MEMBER_PERMISSIONS: '/permissions/member-permissions'
	},
	PROFILE: {
		INDEX: '/profile'
	},
	SETTING: {
		INDEX: '/settings'
	},

	NOTFOUND: {
		INDEX: '*'
	},
	FORBIDDEN: '/403'
};
