import { action } from 'typesafe-actions';
import { City } from 'types/City';
import { Metric } from 'types/Metric';

export enum UiActionKeys {
	GET_CITIES = 'GET_CITIES',
	GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS',
	GET_CITIES_FAILURE = 'GET_CITIES_FAILURE',
	TOGGLE_METRIC_VISIBILITY = 'TOGGLE_METRIC_VISIBILITY',
	TOGGLE_CITY = 'TOGGLE_CITY',
	DECREMENT_COUNTER = 'DECREMENT_COUNTER',
	INCREMENT_COUNTER = 'INCREMENT_COUNTER',
	GET_METRICS = 'GET_METRICS',
	GET_METRICS_SUCCESS = 'GET_METRICS_SUCCESS',
	GET_METRICS_FAILURE = 'GET_METRICS_FAILURE',
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

const getMetrics = {
	request: () => action(UiActionKeys.GET_METRICS),
	success: (metrics: Metric[]) => action(UiActionKeys.GET_METRICS_SUCCESS, metrics),
	failure: (message: string) => action(UiActionKeys.GET_METRICS_FAILURE, message),
};

export const uiActions = {
	getCities,
	toggleCity,
	updateCounter,
	getMetrics,
};
