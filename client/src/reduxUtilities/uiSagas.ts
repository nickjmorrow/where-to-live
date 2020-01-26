import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { uiActions, UiActionKeys } from 'reduxUtilities/uiActions';
import { data } from 'utilities/getData';

const apiRoutes = {
	cities: {
		get: {
			route: '/cities',
			method: axios.get,
		},
	},
};

function* getCitiesAsync() {
	try {
		// const { data } = yield call(cities.get.method, cities.get.route);
		yield put(uiActions.getCities.success(data));
	} catch (error) {
		console.error(error);
		yield put(uiActions.getCities.failure(error));
	}
}

function* watchGetCitiesAsync() {
	yield takeEvery(UiActionKeys.GET_CITIES, getCitiesAsync);
}

export const uiSagas = [watchGetCitiesAsync];
