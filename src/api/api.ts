import API_CONSTANTS, { REQUEST_HEADERS } from '@/constants/api.constant';
import { LoginRequestBody } from '@/pages/auth/types/auth.types';
import { AxiosConfigRequest } from '@/types/axios.types';
import {
	CreateDepartmentsDataRequest,
	CreateDocumentTypeDataRequest,
	CreateIssuersDataRequest,
	CreateProjectsDataRequest,
	DeleteDepartmentsRequest,
	DeleteDocumentTypeRequest,
	DeleteIssuersRequest,
	DeleteProjectsRequest,
	SearchDocumentTypeRequest,
	UpdateDepartmentsRequest,
	UpdateDocumentTypeRequest,
	UpdateIssuersRequest,
	UpdateProjectsRequest
} from '@/types/categories';

export const API_URLS = {
	users: {
		LOGIN: (data: LoginRequestBody): AxiosConfigRequest<LoginRequestBody> => ({
			url: '/api/v1/login',
			method: 'POST',
			headers: API_CONSTANTS.REQUEST_HEADERS.jsonHeader(),
			data: data
		})
	},
	categories: {
		getAllDocumentType: (data: any): AxiosConfigRequest<undefined> => ({
			url: `/api/v1/document_type/search`,
			method: 'GET',
			headers: REQUEST_HEADERS.header(),
			params: data.params
		}),
		createDocumentType: (
			data: CreateDocumentTypeDataRequest
		): AxiosConfigRequest<CreateDocumentTypeDataRequest> => ({
			url: '/api/v1/document_type',
			method: 'POST',
			headers: REQUEST_HEADERS.jsonHeader(),
			data: data
		}),
		updateDocumentType: (
			id: any,
			data: UpdateDocumentTypeRequest
		): AxiosConfigRequest<UpdateDocumentTypeRequest> => ({
			url: `/api/v1/document_type/${id}`,
			method: 'PUT',
			headers: REQUEST_HEADERS.jsonHeader(),
			data: data
		}),
		deleteDocumentType: (id: any): AxiosConfigRequest<DeleteDocumentTypeRequest> => ({
			url: `/api/v1/document_type/delete/${id}`,
			method: 'DELETE',
			headers: REQUEST_HEADERS.jsonHeader()
		}),
		searchDocumentType: (
			query: SearchDocumentTypeRequest
		): AxiosConfigRequest<undefined, SearchDocumentTypeRequest> => ({
			url: '/api/v1/document_type/search',
			method: 'GET',
			headers: REQUEST_HEADERS.header(),
			params: query
		}),
		//issuers
		getAllIssuers: (): AxiosConfigRequest<undefined> => ({
			url: `/api/v1/issuing_authorities/search`,
			method: 'GET',
			headers: REQUEST_HEADERS.header()
		}),
		createIssuers: (
			data: CreateIssuersDataRequest
		): AxiosConfigRequest<CreateIssuersDataRequest> => ({
			url: '/api/v1/issuing_authority',
			method: 'POST',
			headers: REQUEST_HEADERS.jsonHeader(),
			data: data
		}),
		updateIssuers: (
			id: any,
			data: UpdateIssuersRequest
		): AxiosConfigRequest<UpdateIssuersRequest> => ({
			url: `/api/v1/issuing_authority/${id}`,
			method: 'PUT',
			headers: REQUEST_HEADERS.jsonHeader(),
			data: data
		}),
		deleteIssuers: (id: any): AxiosConfigRequest<DeleteIssuersRequest> => ({
			url: `/api/v1/issuing_authority/delete/${id}`,
			method: 'DELETE',
			headers: REQUEST_HEADERS.jsonHeader()
		}),
		//department
		getAllDepartment: (): AxiosConfigRequest<undefined> => ({
			url: `/api/v1/departments/search`,
			method: 'GET',
			headers: REQUEST_HEADERS.header()
		}),
		createDepartments: (
			data: CreateDepartmentsDataRequest
		): AxiosConfigRequest<CreateDepartmentsDataRequest> => ({
			url: '/api/v1/departments',
			method: 'POST',
			headers: REQUEST_HEADERS.jsonHeader(),
			data: data
		}),
		updateDepartments: (
			id: any,
			data: UpdateDepartmentsRequest
		): AxiosConfigRequest<UpdateDepartmentsRequest> => ({
			url: `/api/v1/departments/${id}`,
			method: 'PUT',
			headers: REQUEST_HEADERS.jsonHeader(),
			data: data
		}),
		deleteDepartments: (id: any): AxiosConfigRequest<DeleteDepartmentsRequest> => ({
			url: `/api/v1/departments/delete/${id}`,
			method: 'DELETE',
			headers: REQUEST_HEADERS.jsonHeader()
		}),
		//projects
		getAllProjects: (data: any): AxiosConfigRequest<undefined> => ({
			url: `/api/v1/project/search`,
			method: 'GET',
			headers: REQUEST_HEADERS.header(),
			params: data.params
		}),
		createProjects: (
			data: CreateProjectsDataRequest
		): AxiosConfigRequest<CreateProjectsDataRequest> => ({
			url: '/api/v1/project',
			method: 'POST',
			headers: REQUEST_HEADERS.jsonHeader(),
			data: data
		}),
		updateProjects: (
			id: any,
			data: UpdateProjectsRequest
		): AxiosConfigRequest<UpdateProjectsRequest> => ({
			url: `/api/v1/project/${id}`,
			method: 'PUT',
			headers: REQUEST_HEADERS.jsonHeader(),
			data: data
		}),
		deleteProjects: (id: any): AxiosConfigRequest<DeleteProjectsRequest> => ({
			url: `/api/v1/project/delete/${id}`,
			method: 'DELETE',
			headers: REQUEST_HEADERS.jsonHeader()
		})
	}
};
