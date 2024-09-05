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
	DEVICE: {
		INDEX: '/devices',
		LIST: '/devices',
		DETAIL: '/devices/:id'
	},
	DOCUMENT: {
		INDEX: '/documents',
		INCOMING: '/documents/incoming',
		OUTGOING: '/documents/outgoing',
		INTERNAL: '/documents/internal'
	},
	PERMISSION: {
		INDEX: '/permissions'
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
