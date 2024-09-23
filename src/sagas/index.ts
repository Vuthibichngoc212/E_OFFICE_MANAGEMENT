import { all, fork } from 'redux-saga/effects';
import authSagas from '@/sagas/authSaga.ts';
import categoriesSaga from './categoriesSaga';
export default function* rootSaga() {
	yield all([fork(authSagas), fork(categoriesSaga)]);
}
