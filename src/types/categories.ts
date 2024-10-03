export type DocumentTypeList = {
	id: number;
	name: string;
	description: string;
};
export type IssuersList = {
	id: number;
	name: string;
	code: string;
	description: string;
	abbreviation: string;
};
export type DepartmentsList = {
	id: number;
	name: string;
	parent_department_id: number;
};
export type ProjectsList = {
	id: number;
	name: string;
	code: string;
	description: string;
	project_manager_id: number;
	start_date: Date;
	end_date: Date;
};

//get
export type GetDocumenTypeListResponse = {
	data: DocumentTypeList[];
	error_code: string | null;
	message: string | null;
	success: boolean | null;
};
export type GetIssuersListResponse = {
	data: IssuersList[];
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
export type GetProjectsListResponse = {
	data: ProjectsList[];
	error_code: string | null;
	message: string | null;
	success: boolean | null;
};

//create
export type CreateDocumentTypeDataRequest = {
	name: number;
	description: string;
};
export type CreateDocumentTypeResponse = {
	data: DocumentTypeList | null;
	error_code: string | null;
	message: string | null;
	success: boolean | null;
};

export type CreateIssuersDataRequest = {
	id: number;
	name: string;
	code: string;
	description: string;
	abbreviation: string;
};
export type CreateIssuersResponse = {
	data: IssuersList | null;
	error_code: string | null;
	message: string | null;
	success: boolean | null;
};

export type CreateProjectsDataRequest = {
	id: number;
	name: string;
	code: string;
	description: string;
	project_manager_id: number;
	start_date: Date;
	end_date: Date;
};
export type CreateProjectsResponse = {
	data: ProjectsList | null;
	error_code: string | null;
	message: string | null;
	success: boolean | null;
};

export type CreateDepartmentsDataRequest = {
	name: string;
	parent_department_id: number;
};
export type CreateDepartmentsResponse = {
	data: DepartmentsList | null;
	error_code: string | null;
	message: string | null;
	success: boolean | null;
};

//update
export type UpdateDocumentTypeRequest = Partial<CreateDocumentTypeDataRequest>;
export type UpdateIssuersRequest = Partial<CreateIssuersDataRequest>;
export type UpdateDepartmentsRequest = Partial<CreateDepartmentsDataRequest>;
export type UpdateProjectsRequest = Partial<CreateProjectsDataRequest>;

//delete
export type DeleteProjectsRequest = {
	id: number;
};
export type DeleteDocumentTypeRequest = {
	id: number;
};
export type DeleteIssuersRequest = {
	id: number;
};
export type DeleteDepartmentsRequest = {
	id: number;
};

//search
export type SearchDocumentTypeRequest = {
	param: number | string;
};
