import * as React from 'react';
import { NumberInputButton } from 'components/NumberInputButton';
import { useDispatch, useSelector } from 'react-redux';
import { Metric } from 'types/Metric';
import { uiActions } from 'reduxUtilities/uiActions';
import { selectors } from 'reduxUtilities/uiSelectors';

export const MetricPillbox: React.FC<{ metricIndex: number }> = ({ metricIndex }) => {
	const dispatch = useDispatch();
	const decrement = (metric: Metric) => dispatch(uiActions.updateCounter.decrement(metric));
	const increment = (metric: Metric) => dispatch(uiActions.updateCounter.increment(metric));
	const metric = useSelector(selectors.getMetricByIndex(metricIndex));

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				marginRight: '8px',
			}}
		>
			<NumberInputButton
				backgroundColor={'hsl(150, 75%, 70%)'}
				hoverBackgroundColor={'hsl(150, 75%, 85%)'}
				onClick={e => {
					e.stopPropagation();
					increment(metric);
				}}
				style={{
					borderTopLeftRadius: '6px',
					borderTopRightRadius: '6px',
				}}
			></NumberInputButton>
			<NumberInputButton
				style={{
					borderBottomLeftRadius: '6px',
					borderBottomRightRadius: '6px',
				}}
				onClick={e => {
					e.stopPropagation();
					decrement(metric);
				}}
				backgroundColor={'hsl(0, 75%, 70%)'}
				hoverBackgroundColor={'hsl(0, 75%, 85%)'}
			></NumberInputButton>
		</div>
	);
};
