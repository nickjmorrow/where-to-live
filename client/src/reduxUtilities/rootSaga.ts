import { all, fork } from 'redux-saga/effects';
import { uiSagas } from 'reduxUtilities/uiSagas';

export function* rootSaga() {
	yield all(uiSagas.map(s => fork(s)));
}
