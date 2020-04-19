import { createSelector } from 'reselect';
import { RootState } from 'reduxUtilities/rootReducer';
import { Metric } from 'types/Metric';

const getUiSlice = (state: RootState) => state.ui;

export const getCities = (state: RootState) => getUiSlice(state).cities;

export const getVisibleCitiesSelector = createSelector(getCities, cities => cities.filter(c => c.isVisible));

export const getMetricGroups = (state: RootState) => getUiSlice(state).metricGroups;

export const getMetricsSelector = createSelector(getMetricGroups, metricGroups => {
	return metricGroups.reduce<Metric[]>((agg, cur) => [...agg, ...cur.metrics], []);
});

const getIsCalculating = (state: RootState) => getUiSlice(state).isCalculating;

const getSortedMetric = (state: RootState) => getUiSlice(state).sortedMetric;

const getMetricByIndex = (index: number) => createSelector(getMetricsSelector, metrics => metrics[index]);

export const selectors = {
	getIsCalculating,
	getSortedMetric,
	getMetricByIndex,
};
