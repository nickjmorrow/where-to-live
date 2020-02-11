import { ActionType } from 'typesafe-actions';
import { produce } from 'immer';
import { uiActions, UiActionKeys } from 'reduxUtilities/uiActions';
import { City } from 'types/City';
import { MetricGroup } from 'types/MetricGroup';
import { Metric } from 'types/Metric';

export type UiState = Readonly<typeof initialState>;

const initialState = {
	cities: [] as City[],
	metricGroups: [] as MetricGroup[],
	isCalculating: false,
};

export const uiReducer = (state: UiState = initialState, action: ActionType<typeof uiActions>) => {
	switch (action.type) {
		case UiActionKeys.CALCULATE_CITY_SCORES:
			return produce(state, draftState => {
				draftState.isCalculating = true;
			});
		case UiActionKeys.GET_CITIES_SUCCESS:
			return produce(state, draftState => {
				draftState.cities = action.payload;
			});
		case UiActionKeys.GET_METRIC_GROUPS_SUCCESS:
			return produce(state, draftState => {
				draftState.metricGroups = action.payload;
			});
		case UiActionKeys.CALCULATE_CITY_SCORES_SUCCESS:
			return produce(state, draftState => {
				draftState.cities = action.payload;
				draftState.isCalculating = false;
			});
		case UiActionKeys.TOGGLE_CITY:
			return produce(state, draftState => {
				draftState.cities.forEach((c: City) => {
					if (c.label === action.payload.label) {
						c.isVisible = !c.isVisible;
					}
				});
			});
		case UiActionKeys.INCREMENT_COUNTER:
			return produce(state, draftState => {
				draftState.metricGroups.forEach((mg: MetricGroup) => {
					mg.metrics.forEach((m: Metric) => {
						if (m.label === action.payload.label && m.calculationConfig.isIncludedInCalculation) {
							m.calculationConfig.multiplier += 1;
						}
					});
				});
			});
		case UiActionKeys.DECREMENT_COUNTER:
			return produce(state, draftState => {
				draftState.metricGroups.forEach((mg: MetricGroup) => {
					mg.metrics.forEach((m: Metric) => {
						if (m.label === action.payload.label && m.calculationConfig.isIncludedInCalculation) {
							m.calculationConfig.multiplier -= 1;
						}
					});
				});
			});
		default:
			return state;
	}
};
