import { REQUEST_HEADERS } from '@/constants/api.constant';
import { AxiosConfigRequest } from '@/types/axios.types';

export const API_URLS = {
	categories: {
		getAll: (): AxiosConfigRequest<undefined> => ({
			url: `/api/v1/document_types`,
			method: 'GET',
			headers: REQUEST_HEADERS.header()
		})
	}
};
