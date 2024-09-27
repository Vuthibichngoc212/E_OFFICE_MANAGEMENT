import { API_URLS } from '@/api/api';
import { GetLoginListResponse, LoginRequestBody } from '@/pages/auth/types/auth.types';
import { loginActions } from '@/redux/slices/auth';
import api from '@/services/api';
import { takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';

// Saga worker để xử lý quá trình login
function* fetchLoginRequest(action: PayloadAction<LoginRequestBody>) {
	try {
		const response: GetLoginListResponse = yield call(() =>
			api(API_URLS.users.LOGIN(action.payload))
		);
		yield put(loginActions.fetchLoginSuccess(response));
	} catch (error) {
		yield put(loginActions.fetchLoginFailure());
	}
}

export default function* authSagas() {
	yield takeLatest(loginActions.fetchLoginRequest.type, fetchLoginRequest);
}
