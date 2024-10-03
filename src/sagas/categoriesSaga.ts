/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { API_URLS } from '@/api/api';
import { categoriesActions } from '@/redux/slices/categories';
import api from '@/services/api';
import {
	DeleteDocumentTypeRequest,
	DeleteIssuersRequest,
	DeleteProjectsRequest,
	GetDepartmenstListResponse,
	GetDocumenTypeListResponse,
	GetIssuersListResponse,
	GetProjectsListResponse
} from '@/types/categories';
import { ActionPayload } from '@/types/index.types';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

//get
function* fetchGetDocumentType(action: PayloadAction<{ page: number; pageSize: number }>) {
	try {
		const { page, pageSize } = action.payload;
		const response: GetDocumenTypeListResponse = yield call(() =>
			api(API_URLS.categories.getAllDocumentType({ params: { page: page, limit: pageSize } }))
		);
		yield put(categoriesActions.fetchGetDocumentTypeSuccess(response));
	} catch (error) {
		yield put(categoriesActions.fetchGetDocumentTypeError());
	}
}

function* fetchGetIssuers(action: PayloadAction<any>) {
	try {
		const response: GetIssuersListResponse = yield call(() =>
			api(API_URLS.categories.getAllIssuers())
		);
		yield put(categoriesActions.fetchGetIssuersSuccess(response));
	} catch (error) {
		yield put(categoriesActions.fetchGetIssuersError());
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
function* fetchGetProjects(action: PayloadAction<any>) {
	try {
		const { page, pageSize } = action.payload;
		const response: GetProjectsListResponse = yield call(() =>
			api(API_URLS.categories.getAllProjects({ params: { page: page, limit: pageSize } }))
		);
		yield put(categoriesActions.fetchGetProjectsSuccess(response));
	} catch (error) {
		yield put(categoriesActions.fetchGetProjectsError());
	}
}

//create
function* fetchCreateDocumentType(action: PayloadAction<ActionPayload<any>>) {
	try {
		yield call(() => api(API_URLS.categories.createDocumentType(action.payload.data)));
		action.payload.meta.onSuccess();
	} catch (error: any) {
		action.payload.meta.onError();
	}
}
function* fetchCreateIssuers(action: PayloadAction<ActionPayload<any>>) {
	try {
		yield call(() => api(API_URLS.categories.createIssuers(action.payload.data)));
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
function* fetchCreateProjects(action: PayloadAction<ActionPayload<any>>) {
	try {
		yield call(() => api(API_URLS.categories.createProjects(action.payload.data)));
		action.payload.meta.onSuccess();
	} catch (error: any) {
		action.payload.meta.onError();
	}
}

//update
function* fetchUpdateDocumentType(action: PayloadAction<ActionPayload<any>>) {
	try {
		const { id, ...data } = action.payload.data;

		yield call(() => api(API_URLS.categories.updateDocumentType(id, data)));
		action.payload.meta.onSuccess();
	} catch (error: any) {
		action.payload.meta.onError();
	}
}
function* fetchUpdateIssuers(action: PayloadAction<ActionPayload<any>>) {
	try {
		const { id, ...data } = action.payload.data;

		yield call(() => api(API_URLS.categories.updateIssuers(id, data)));
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
function* fetchUpdateProjects(action: PayloadAction<ActionPayload<any>>) {
	try {
		const { id, ...data } = action.payload.data;

		yield call(() => api(API_URLS.categories.updateProjects(id, data)));
		action.payload.meta.onSuccess();
	} catch (error: any) {
		action.payload.meta.onError();
	}
}

//delete
function* fetchDeleteDocumentType(action: PayloadAction<ActionPayload<DeleteDocumentTypeRequest>>) {
	try {
		const { id } = action.payload.data;
		yield call(() => api(API_URLS.categories.deleteDocumentType(id)));
		action.payload.meta.onSuccess();
		// yield put(categoriesActions.fetchGetDocumentType());
	} catch (error: any) {
		yield put(categoriesActions.fetchGetDocumentTypeError());
	}
}
function* fetchDeleteIssuers(action: PayloadAction<ActionPayload<DeleteIssuersRequest>>) {
	try {
		const { id } = action.payload.data;
		yield call(() => api(API_URLS.categories.deleteIssuers(id)));
		action.payload.meta.onSuccess();
		yield put(categoriesActions.fetchGetIssuers());
	} catch (error: any) {
		yield put(categoriesActions.fetchGetIssuersError());
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
function* fetchDeleteProjects(action: PayloadAction<ActionPayload<DeleteProjectsRequest>>) {
	try {
		const { id } = action.payload.data;
		yield call(() => api(API_URLS.categories.deleteProjects(id)));
		action.payload.meta.onSuccess();
		// yield put(categoriesActions.fetchGetProjects());
	} catch (error: any) {
		yield put(categoriesActions.fetchGetProjectsError());
	}
}

export default function* categoriesSaga() {
	yield takeLatest(categoriesActions.fetchGetDocumentType.type, fetchGetDocumentType);
	yield takeLatest(categoriesActions.fetchGetIssuers.type, fetchGetIssuers);
	yield takeLatest(categoriesActions.fetchGetDepartments.type, fetchGetDepartments);
	yield takeLatest(categoriesActions.fetchGetProjects.type, fetchGetProjects);
	yield takeLatest(categoriesActions.fetchCreateDocumentType.type, fetchCreateDocumentType);
	yield takeLatest(categoriesActions.fetchCreateIssuers.type, fetchCreateIssuers);
	yield takeLatest(categoriesActions.fetchCreateDepartments.type, fetchCreateDepartments);
	yield takeLatest(categoriesActions.fetchCreateProjects.type, fetchCreateProjects);
	yield takeLatest(categoriesActions.fetchUpdateDocumentType.type, fetchUpdateDocumentType);
	yield takeLatest(categoriesActions.fetchUpdateIssuers.type, fetchUpdateIssuers);
	yield takeLatest(categoriesActions.fetchUpdateDepartments.type, fetchUpdateDepartments);
	yield takeLatest(categoriesActions.fetchUpdateProjects.type, fetchUpdateProjects);
	yield takeLatest(categoriesActions.fetchDeleteDocumentType.type, fetchDeleteDocumentType);
	yield takeLatest(categoriesActions.fetchDeleteIssuers.type, fetchDeleteIssuers);
	yield takeLatest(categoriesActions.fetchDeleteDepartments.type, fetchDeleteDepartments);
	yield takeLatest(categoriesActions.fetchDeleteProjects.type, fetchDeleteProjects);
}
