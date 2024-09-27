import API_CONSTANTS, { REQUEST_HEADERS } from '@/constants/api.constant';
import { LoginRequestBody } from '@/pages/auth/types/auth.types';
import { AxiosConfigRequest } from '@/types/axios.types';
import {
	CreateDepartmentsDataRequest,
	CreateDocumentTypeDataRequest,
	DeleteDepartmentsRequest,
	DeleteDocumentTypeRequest,
	UpdateDepartmentsRequest,
	UpdateDocumentTypeRequest
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
		// document type
		getAllDocumentType: (): AxiosConfigRequest<undefined> => ({
			url: `/api/v1/document_type/search`,
			method: 'GET',
			headers: REQUEST_HEADERS.header()
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
		})
	}
};
