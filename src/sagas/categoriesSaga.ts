/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { API_URLS } from '@/api/api';
import { categoriesActions } from '@/redux/slices/categories';
import api from '@/services/api';
import { GetDocumenTypeListResponse } from '@/types/categories';
import { ActionPayload } from '@/types/index.types';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchGetDocumentType(action: PayloadAction<any>) {
	try {
		const response: GetDocumenTypeListResponse = yield call(() =>
			api(API_URLS.categories.getAllDocumentType())
		);
		yield put(categoriesActions.fetchGetDocumentTypeSuccess(response));
	} catch (error) {
		yield put(categoriesActions.fetchGetDocumentTypeError());
	}
}

function* fetchCreateDocumentType(action: PayloadAction<ActionPayload<any>>) {
	try {
		yield call(() => api(API_URLS.categories.createDocumentType(action.payload.data)));
		action.payload.meta.onSuccess();
	} catch (error: any) {
		action.payload.meta.onError();
	}
}

export default function* categoriesSaga() {
	yield takeLatest(categoriesActions.fetchGetDocumentType.type, fetchGetDocumentType);
	yield takeLatest(categoriesActions.fetchCreateDocumentType.type, fetchCreateDocumentType);
}
