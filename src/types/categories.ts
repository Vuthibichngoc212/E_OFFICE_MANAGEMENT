// export type CategoryList = {
// 	devices: number;
// 	device_types: number;
// 	company: number;
// 	user: number;
// };

export type DocumentTypeList = {
	id: number;
	name: number;
	code: number;
	description: number;
};

//get
export type GetDocumentypeListResponse = {
	data: DocumentTypeList[];
	error_code: string | null;
	message: string | null;
	success: boolean | null;
};
