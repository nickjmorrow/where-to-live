import { ActionType } from 'typesafe-actions';
import { produce } from 'immer';
import { uiActions, UiActionKeys } from 'reduxUtilities/uiActions';
import { City } from 'types/City';
import { metricGroups } from 'components/metricGroups';
import { MetricGroup } from 'types/MetricGroup';
import { Metric } from 'types/Metric';

export type UiState = Readonly<typeof initialState>;

const initialState = {
	cities: [] as City[],
	metricGroups: metricGroups,
};

export const uiReducer = (state: UiState = initialState, action: ActionType<typeof uiActions>) => {
	switch (action.type) {
		case UiActionKeys.GET_CITIES_SUCCESS:
			return produce(state, draftState => {
				draftState.cities = action.payload;
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
						if (m.label === action.payload.label) {
							m.multiplier += 1;
						}
					});
				});
			});
		case UiActionKeys.DECREMENT_COUNTER:
			return produce(state, draftState => {
				draftState.metricGroups.forEach((mg: MetricGroup) => {
					mg.metrics.forEach((m: Metric) => {
						if (m.label === action.payload.label) {
							m.multiplier -= 1;
						}
					});
				});
			});
		default:
			return state;
	}
};
