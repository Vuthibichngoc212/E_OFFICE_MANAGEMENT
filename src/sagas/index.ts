import { all, fork } from 'redux-saga/effects';
import authSagas from '@/sagas/authSaga.ts';
export default function* rootSaga() {
	yield all([fork(authSagas)]);
}
