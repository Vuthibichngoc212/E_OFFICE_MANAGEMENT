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
	COMPANY: {
		INDEX: '/companies',
		LIST: '/companies',
		DETAIL: '/companies/:id'
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
