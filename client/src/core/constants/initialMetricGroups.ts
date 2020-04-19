import { MetricGroup } from 'types/MetricGroup';

export const initialMetricGroups: MetricGroup[] = [
	{
		name: 'City',
		metrics: [
			{
				label: 'Name',
				accessor: 'label' as any,
				textAlignment: 'left',
				mask: '999,999,999',
				calculationConfig: { isIncludedInCalculation: false },
			},
			{
				label: 'Score',
				accessor: 'score' as any,
				textAlignment: 'right',
				mask: '999,999,999',
				calculationConfig: { isIncludedInCalculation: false },
			},
		],
	},
	{
		name: 'Financial',
		metrics: [
			{
				label: 'CoL',
				accessor: 'costOfLivingIndex' as any,
				textAlignment: 'right',
				mask: '999,999,999.99',
				calculationConfig: { sortType: { order: 'ascending' }, multiplier: 1, isIncludedInCalculation: true },
			},
			{
				label: 'Pur. Power Idx',
				accessor: 'purchasingPowerIndex' as any,
				textAlignment: 'right',
				mask: '999,999,999.99',
				calculationConfig: { sortType: { order: 'descending' }, multiplier: 1, isIncludedInCalculation: true },
			},
		],
	},
	{
		name: 'Personal',
		metrics: [
			{
				label: 'Population',
				accessor: 'population',
				textAlignment: 'right',
				mask: '999,999,999',
				calculationConfig: { sortType: { order: 'descending' }, multiplier: 1, isIncludedInCalculation: true },
			},
			{
				label: 'QoL Idx',
				accessor: 'qualityOfLifeIndex' as any,
				textAlignment: 'right',
				mask: '999,999,999.99',
				calculationConfig: { sortType: { order: 'descending' }, multiplier: 1, isIncludedInCalculation: true },
			},
			{
				label: 'Safety Idx',
				accessor: 'safetyIndex',
				textAlignment: 'right',
				mask: '999,999,999',
				calculationConfig: { sortType: { order: 'descending' }, multiplier: 1, isIncludedInCalculation: true },
			},
		],
	},
];
