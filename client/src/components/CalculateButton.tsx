import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCities, getMetricsSelector, selectors } from 'reduxUtilities/uiSelectors';
import { Button } from '@nickjmorrow/react-component-library';
import { uiActions } from 'reduxUtilities/uiActions';

export const CalculateButton: React.FC = () => {
	const dispatch = useDispatch();
	const cities = useSelector(getCities);
	const metrics = useSelector(getMetricsSelector);
	const isCalculating = useSelector(selectors.getIsCalculating);

	console.log(isCalculating);
	return (
		<Button
			isLoading={isCalculating}
			onClick={() => dispatch(uiActions.calculateCityScores.request({ cities, metrics }))}
		>
			Calculate
		</Button>
	);
};
