/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { API_URLS } from '@/api/api';
import { categoriesActions } from '@/redux/slices/categories';
import api from '@/services/api';
import {
	DeleteDocumentTypeRequest,
	GetDepartmenstListResponse,
	GetDocumenTypeListResponse
} from '@/types/categories';
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
function* fetchGetDepartments(action: PayloadAction<any>) {
	try {
		const response: GetDepartmenstListResponse = yield call(() =>
			api(API_URLS.categories.getAllDepartment())
		);
		yield put(categoriesActions.fetchGetDepartmentsSuccess(response));
	} catch (error) {
		yield put(categoriesActions.fetchGetDepartmentsError());
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
function* fetchCreateDepartments(action: PayloadAction<ActionPayload<any>>) {
	try {
		yield call(() => api(API_URLS.categories.createDepartments(action.payload.data)));
		action.payload.meta.onSuccess();
	} catch (error: any) {
		action.payload.meta.onError();
	}
}

function* fetchUpdateDocumentType(action: PayloadAction<ActionPayload<any>>) {
	try {
		const { id, ...data } = action.payload.data;

		yield call(() => api(API_URLS.categories.updateDocumentType(id, data)));
		action.payload.meta.onSuccess();
	} catch (error: any) {
		action.payload.meta.onError();
	}
}
function* fetchUpdateDepartments(action: PayloadAction<ActionPayload<any>>) {
	try {
		const { id, ...data } = action.payload.data;

		yield call(() => api(API_URLS.categories.updateDepartments(id, data)));
		action.payload.meta.onSuccess();
	} catch (error: any) {
		action.payload.meta.onError();
	}
}

function* fetchDeleteDocumentType(action: PayloadAction<ActionPayload<DeleteDocumentTypeRequest>>) {
	try {
		const { id } = action.payload.data;
		yield call(() => api(API_URLS.categories.deleteDocumentType(id)));
		action.payload.meta.onSuccess();
		yield put(categoriesActions.fetchGetDocumentType());
	} catch (error: any) {
		yield put(categoriesActions.fetchGetDocumentTypeError());
	}
}
function* fetchDeleteDepartments(action: PayloadAction<ActionPayload<DeleteDocumentTypeRequest>>) {
	try {
		const { id } = action.payload.data;
		yield call(() => api(API_URLS.categories.deleteDepartments(id)));
		action.payload.meta.onSuccess();
		yield put(categoriesActions.fetchGetDepartments());
	} catch (error: any) {
		yield put(categoriesActions.fetchGetDepartmentsError());
	}
}

export default function* categoriesSaga() {
	yield takeLatest(categoriesActions.fetchGetDocumentType.type, fetchGetDocumentType);
	yield takeLatest(categoriesActions.fetchGetDepartments.type, fetchGetDepartments);
	yield takeLatest(categoriesActions.fetchCreateDocumentType.type, fetchCreateDocumentType);
	yield takeLatest(categoriesActions.fetchCreateDepartments.type, fetchCreateDepartments);
	yield takeLatest(categoriesActions.fetchUpdateDocumentType.type, fetchUpdateDocumentType);
	yield takeLatest(categoriesActions.fetchUpdateDepartments.type, fetchUpdateDepartments);
	yield takeLatest(categoriesActions.fetchDeleteDocumentType.type, fetchDeleteDocumentType);
	yield takeLatest(categoriesActions.fetchDeleteDepartments.type, fetchDeleteDepartments);
}
