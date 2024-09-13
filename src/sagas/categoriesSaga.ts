import { API_URLS } from '@/api/api';
import { categoriesActions } from '@/redux/slices/categories';
import api from '@/services/api';
import { GetDocumentypeListResponse } from '@/types/categories';
import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchGetDocumentType() {
	try {
		const response: GetDocumentypeListResponse = yield call(() =>
			api(API_URLS.categories.getAll())
		);
		yield put(categoriesActions.fetchGetDocumentTypeSuccess(response));
	} catch (error) {
		yield put(categoriesActions.fetchGetDocumentTypeError());
	}
}

export default function* companiesSaga() {
	yield takeLatest(categoriesActions.fetchGetDocumentType.type, fetchGetDocumentType);
}
