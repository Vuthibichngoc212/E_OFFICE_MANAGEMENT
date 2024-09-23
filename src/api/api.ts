import { REQUEST_HEADERS } from '@/constants/api.constant';
import { AxiosConfigRequest } from '@/types/axios.types';
import { CreateDocumentTypeDataRequest } from '@/types/categories';

export const API_URLS = {
	categories: {
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
		})
	}
};
