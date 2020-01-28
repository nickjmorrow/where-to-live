import { action } from 'typesafe-actions';
import { City } from 'types/City';
import { Metric } from 'types/Metric';
import { MetricGroup } from 'types/MetricGroup';

export enum UiActionKeys {
	GET_CITIES = 'GET_CITIES',
	GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS',
	GET_CITIES_FAILURE = 'GET_CITIES_FAILURE',
	TOGGLE_METRIC_VISIBILITY = 'TOGGLE_METRIC_VISIBILITY',
	TOGGLE_CITY = 'TOGGLE_CITY',
	DECREMENT_COUNTER = 'DECREMENT_COUNTER',
	INCREMENT_COUNTER = 'INCREMENT_COUNTER',
	GET_METRIC_GROUPS = 'GET_METRIC_GROUPS',
	GET_METRIC_GROUPS_SUCCESS = 'GET_METRIC_GROUPS_SUCCESS',
	GET_METRIC_GROUPS_FAILURE = 'GET_METRIC_GROUPS_FAILURE',
	CALCULATE_CITY_SCORES = 'CALCULATE_CITY_SCORES',
	CALCULATE_CITY_SCORES_SUCCESS = 'CALCULATE_CITY_SCORES_SUCCESS',
	CALCULATE_CITY_SCORES_FAILURE = 'CALCULATE_CITY_SCORES_FAILURE',
}

const getCities = {
	request: () => action(UiActionKeys.GET_CITIES),
	success: (cities: City[]) => action(UiActionKeys.GET_CITIES_SUCCESS, cities),
	failure: (message: string) => action(UiActionKeys.GET_CITIES_FAILURE, message),
};

const toggleCity = (city: City) => action(UiActionKeys.TOGGLE_CITY, city);

const updateCounter = {
	decrement: (metric: Metric) => action(UiActionKeys.DECREMENT_COUNTER, metric),
	increment: (metric: Metric) => action(UiActionKeys.INCREMENT_COUNTER, metric),
};

const getMetricGroups = {
	request: () => action(UiActionKeys.GET_METRIC_GROUPS),
	success: (metrics: MetricGroup[]) => action(UiActionKeys.GET_METRIC_GROUPS_SUCCESS, metrics),
	failure: (message: string) => action(UiActionKeys.GET_METRIC_GROUPS_FAILURE, message),
};

interface CalculateRequest {
	cities: City[];
	metrics: Metric[];
}

const calculateCityScores = {
	request: (calculateRequest: CalculateRequest) => action(UiActionKeys.CALCULATE_CITY_SCORES, calculateRequest),
	success: (cities: City[]) => action(UiActionKeys.CALCULATE_CITY_SCORES_SUCCESS, cities),
	failure: (message: string) => action(UiActionKeys.CALCULATE_CITY_SCORES_FAILURE, message),
};

export const uiActions = {
	getCities,
	toggleCity,
	updateCounter,
	getMetricGroups,
	calculateCityScores,
};
