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
		PROJECTS: '/category/projects',
		DOCUMENT_TYPE: '/category/document-type',
		ISSUING_AUTHORITY: '/category/issuing-authority',
		DEPARTMENT: '/category/department'
	},
	PROCESS: {
		INDEX: '/process'
	},
	SCHEDULE: {
		INDEX: '/schedule'
	},
	SYSTEM: {
		INDEX: '/system',
		ACCOUNTS: '/system/accounts',
		PERMISSIONS: '/system/permissions'
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
