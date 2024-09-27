import { systemTimezone } from '@/utils/DateTime';

export const API_STATUS_CODES = {
	ok: 200,
	created: 201,
	accepted: 202,
	nonAuthoritativeInfo: 203,
	noContent: 204,
	badRequest: 400,
	unauthorized: 401,
	paymentRequired: 402,
	forbidden: 403,
	notFound: 404,
	methodNotAllowed: 405,
	notAcceptable: 406,
	expiredToken: 408,
	upgradeRequired: 426,
	internalServerError: 500,
	serviceTemporarilyUnavailable: 503
};

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const USER_ID = 'user_id';

export const REQUEST_HEADERS = {
	defaultHeader: {
		'Content-Type': 'application/json; charset=UTF-8',
		'X-Timezone': systemTimezone
	},
	header: () => ({
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Cache-Control': 'no-store, no-cache',
		'X-Timezone': systemTimezone
	}),
	jsonHeader: () => ({
		'Content-Type': 'application/json; charset=UTF-8',
		'X-Timezone': systemTimezone
	}),
	fileHeader: () => ({
		'Content-Type': 'multipart/form-data',
		'X-Timezone': systemTimezone
	}),
	scmHeader: () => ({
		'Content-Type': 'application/json; charset=UTF-8',
		'X-Timezone': systemTimezone
	})
};

const API_CONSTANTS = {
	API_STATUS_CODES,
	ACCESS_TOKEN_KEY,
	REFRESH_TOKEN_KEY,
	USER_ID,
	REQUEST_HEADERS
};

export default API_CONSTANTS;
