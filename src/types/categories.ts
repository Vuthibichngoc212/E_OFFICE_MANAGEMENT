export type DocumentTypeList = {
	id: number;
	name: number;
	// code: number;
	description: string;
};

//get
export type GetDocumenTypeListResponse = {
	data: DocumentTypeList[];
	error_code: string | null;
	message: string | null;
	success: boolean | null;
};

//create
export type CreateDocumentTypeDataRequest = {
	name: number;
	// code: number;
	description: string;
};
export type CreateDocumentTypeResponse = {
	data: DocumentTypeList | null;
	error_code: string | null;
	message: string | null;
	success: boolean | null;
};
