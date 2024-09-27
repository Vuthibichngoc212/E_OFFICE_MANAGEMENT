export type LoginRequestBody = {
	password: string;
	email: string;
};

//get
export type GetLoginListResponse = {
	data: LoginRequestBody[];
	error_code: string | null;
	message: string | null;
	success: boolean | null;
};
