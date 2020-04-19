import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { uiActions, UiActionKeys } from 'reduxUtilities/uiActions';
import { City } from 'types/City';

const apiRoutes = {
	getCities: {
		route: '/defaultCityScores',
		method: axios.get,
	},
	getMetricGroups: {
		route: '/metricGroups',
		method: axios.get,
	},
	calculateCityScores: {
		route: '/calculateScores',
		method: axios.post,
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
		const { data } = yield call(apiRoutes.getMetricGroups.method, apiRoutes.getMetricGroups.route);
		yield put(uiActions.getMetricGroups.success(data));
	} catch (error) {
		console.error(error);
		yield put(uiActions.getMetricGroups.failure(error));
	}
}

function* watchGetMetricsAsync() {
	yield takeEvery(UiActionKeys.GET_METRIC_GROUPS, getMetricsAsync);
}

function* calculateCityScoresAsync(action: ReturnType<typeof uiActions.calculateCityScores.request>) {
	try {
		const { data } = yield call(
			apiRoutes.calculateCityScores.method,
			apiRoutes.calculateCityScores.route,
			action.payload,
		);
		yield put(uiActions.calculateCityScores.success(data));
	} catch (error) {
		console.error(error);
		yield put(uiActions.calculateCityScores.failure(error));
	}
}

function* watchCalculateCityScores() {
	yield takeEvery(UiActionKeys.CALCULATE_CITY_SCORES, calculateCityScoresAsync);
}

export const uiSagas = [watchGetCitiesAsync, watchGetMetricsAsync, watchCalculateCityScores];
