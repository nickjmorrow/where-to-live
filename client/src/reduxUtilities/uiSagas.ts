import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { uiActions, UiActionKeys } from 'reduxUtilities/uiActions';
import { data } from 'utilities/getData';
import { City } from 'types/City';

const apiRoutes = {
	getCities: {
		route: '/defaultCityScores',
		method: axios.get,
	},
	getMetrics: {
		route: '/metrics',
		method: axios.get,
	},
};

function* getCitiesAsync() {
	try {
		const { data } = yield call(apiRoutes.getCities.method, apiRoutes.getCities.route);
		yield put(uiActions.getCities.success(data.map((c: City) => ({ ...c, isVisible: true }))));
	} catch (error) {
		console.error(error);
		yield put(uiActions.getCities.failure(error));
	}
}

function* watchGetCitiesAsync() {
	yield takeEvery(UiActionKeys.GET_CITIES, getCitiesAsync);
}

function* getMetricsAsync() {
	try {
		const { data } = yield call(apiRoutes.getMetrics.method, apiRoutes.getMetrics.route);
		yield put(uiActions.getMetrics.success(data));
	} catch (error) {
		console.error(error);
		yield put(uiActions.getMetrics.failure(error));
	}
}

function* watchGetMetricsAsync() {
	yield takeEvery(UiActionKeys.GET_METRICS, getMetricsAsync);
}

export const uiSagas = [watchGetCitiesAsync, watchGetMetricsAsync];
