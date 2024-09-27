export type DocumentTypeList = {
	id: number;
	name: string;
	description: string;
};
export type DepartmentsList = {
	id: number;
	name: number;
	parent_department_id: number;
};

//get
export type GetDocumenTypeListResponse = {
	data: DocumentTypeList[];
	error_code: string | null;
	message: string | null;
	success: boolean | null;
};
export type GetDepartmenstListResponse = {
	data: DepartmentsList[];
	error_code: string | null;
	message: string | null;
	success: boolean | null;
};

//create
export type CreateDocumentTypeDataRequest = {
	name: number;
	description: string;
};
export type CreateDepartmentsResponse = {
	data: DepartmentsList | null;
	error_code: string | null;
	message: string | null;
	success: boolean | null;
};

export type CreateDepartmentsDataRequest = {
	name: number;
	parent_department_id: string;
};
export type CreateDocumentTypeResponse = {
	data: DocumentTypeList | null;
	error_code: string | null;
	message: string | null;
	success: boolean | null;
};

//update
export type UpdateDocumentTypeRequest = Partial<CreateDocumentTypeDataRequest>;
export type UpdateDepartmentsRequest = Partial<CreateDepartmentsDataRequest>;

//delete
export type DeleteDocumentTypeRequest = {
	id: number;
};
export type DeleteDepartmentsRequest = {
	id: number;
};
