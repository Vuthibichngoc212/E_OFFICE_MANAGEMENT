export interface AuthState {
	accessToken?: string;
	refreshToken?: string;
	isLoggingIn?: boolean;
	errorCode?: string;
}
