import styled from 'styled-components';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCities, getMetricGroups, getMetricsSelector } from 'reduxUtilities/uiSelectors';
import { Collapse } from 'react-collapse';
import { Metric } from 'types/Metric';
import { uiActions } from 'reduxUtilities/uiActions';
import { City } from 'types/City';

interface FilterOption {
	label: string;
	isVisible: boolean;
	handleClick: () => void;
}

interface FilterGroup {
	label: string;
	options: FilterOption[];
	handleClick: () => void;
	isOpen: boolean;
	renderFunc: (filterOption: FilterOption) => React.ReactNode;
}

const MenuOptions: React.FC<{ filterGroup: FilterGroup }> = ({ filterGroup: fg }) => {
	return (
		<div>
			<div
				onClick={() => fg.handleClick()}
				style={{ cursor: 'pointer', display: 'flex', justifyContent: 'flex-start', padding: '16px 0' }}
			>
				<div>{fg.label}</div>
			</div>
			<form>
				<Collapse isOpened={fg.isOpen}>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						{fg.options.map(o => fg.renderFunc(o))}
					</div>
				</Collapse>
			</form>
		</div>
	);
};

export const Controls: React.FC = () => {
	const cities = useSelector(getCities);

	const metricGroups = useSelector(getMetricGroups);

	const dispatch = useDispatch();

	const toggleCity = (city: City) => dispatch(uiActions.toggleCity(city));

	const metrics = useSelector(getMetricsSelector);

	const [isMetricsOpen, setIsMetricsOpen] = React.useState(true);
	const [isCitiesOpen, setIsCitiesOpen] = React.useState(true);
	const decrement = (option: FilterOption) =>
		dispatch(uiActions.updateCounter.decrement(metrics.find(m => m.label === option.label)!));
	const increment = (option: FilterOption) =>
		dispatch(uiActions.updateCounter.increment(metrics.find(m => m.label === option.label)!));

	const filterGroups: FilterGroup[] = [
		{
			label: 'Metrics',
			options: metrics.map(m => ({ ...m, handleClick: () => {} })),
			handleClick: () => setIsMetricsOpen(state => !state),
			isOpen: isMetricsOpen,
			renderFunc: (o: FilterOption) => (
				<div style={{ display: 'flex', justifyContent: 'flex-start', fontSize: '18px', margin: '4px 0' }}>
					<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
						<div style={{ display: 'flex', flexDirection: 'column', marginRight: '6px' }}>
							<NumberInputButton
								backgroundColor={'hsl(150, 75%, 70%)'}
								onHoverBackgroundColor={'hsl(150, 75%, 85%)'}
								onClick={() => increment(o)}
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
								onClick={() => decrement(o)}
								backgroundColor={'hsl(0, 75%, 70%)'}
								onHoverBackgroundColor={'hsl(0, 75%, 85%)'}
							></NumberInputButton>
						</div>
						<div style={{ marginRight: '26px' }}>{metrics.find(m => m.label === o.label)!.multiplier}</div>
						<div>{o.label}</div>
					</div>
				</div>
			),
		},
		{
			label: 'Cities',
			options: cities.map(c => ({ ...c, handleClick: () => toggleCity(c) })),
			handleClick: () => setIsCitiesOpen(state => !state),
			isOpen: isCitiesOpen,
			renderFunc: (o: FilterOption) => (
				<CheckboxWrapper>
					<Input
						type="checkbox"
						style={{ height: '16px', width: '16px' }}
						checked={o.isVisible}
						onChange={() => o.handleClick()}
						id={`${o.label}_checkbox`}
					/>
					<Label htmlFor={`${o.label}_checkbox`}>{o.label}</Label>
				</CheckboxWrapper>
			),
		},
	];

	return (
		<div>
			{filterGroups.map(fg => (
				<MenuOptions filterGroup={fg} />
			))}
		</div>
	);
};

const NumberInputButton = styled('div')<{ backgroundColor: string; onHoverBackgroundColor: string }>`
	height: 15px;
	width: 15px;
	cursor: pointer;
	background-color: ${p => p.backgroundColor};
	transition: all 250ms;
	&: hover {
		transition: all 250ms;
		background-color: ${p => p.onHoverBackgroundColor};
	}
`;

const CheckboxWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 4px 0px;

	input[type='checkbox'] + label::after {
		content: none;
	}

	input[type='checkbox']:checked + label::after {
		content: '';
	}
`;

const Label = styled.label`
	position: relative;
	padding-left: 28px;
	font-size: 18px;

	&::before {
		height: 22px;
		width: 22px;
		border: 1px solid;
		top: 0px;
		left: -5px;
	}

	&::after {
		left: 2px;
		top: 5px;
		height: 6px;
		width: 9px;
		border-left: 2px solid;
		border-bottom: 2px solid;
		transform: rotate(-45deg);
	}

	&::before,
	::after {
		content: '';
		display: inline-block;
		position: absolute;
		color: white;
		background-color: hsl(199.4, 100%, 50%);
	}
`;

const Input = styled.input`
	opacity: 0;
	margin-right: -16px;
`;
