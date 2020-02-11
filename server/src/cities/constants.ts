import { Metric } from 'cities/Metric';
import { MetricGroup } from 'cities/MetricGroup';

export const metrics: Metric[] = [
	{
		isIncludedInCalculation: true,
		label: 'Cost of Living',
		accessor: 'costOfLiving',
		multiplier: 1,
		textAlignment: 'right',
		mask: '999,999,999',
	},
	{
		isIncludedInCalculation: true,
		label: 'Happiness',
		accessor: 'happiness',
		multiplier: 1,
		textAlignment: 'right',
		mask: '999,999,999',
	},
	{
		isIncludedInCalculation: true,
		label: 'Population',
		accessor: 'population',
		multiplier: 1,
		textAlignment: 'right',
		mask: '999,999,999',
	},
	{
		isIncludedInCalculation: true,
		label: 'Tech Jobs',
		accessor: 'techJobs',
		multiplier: 1,
		textAlignment: 'right',
		mask: '999,999,999',
	},
];

// TODO: should not need type assertion
export const metricGroups: MetricGroup[] = [
	{
		name: 'City',
		metrics: [
			{
				label: 'Name',
				accessor: 'label',
				isIncludedInCalculation: false,
				textAlignment: 'left',
				mask: '999,999,999',
			},
			{
				label: 'Score',
				accessor: 'score',
				isIncludedInCalculation: false,
				textAlignment: 'right',
				mask: '999,999,999',
			},
		],
	},
	{
		name: 'Financial',
		metrics: [
			{
				label: 'Cost of Living',
				accessor: 'costOfLiving',
				isIncludedInCalculation: true,
				textAlignment: 'right',
				mask: '999,999,999',
			},
			{
				label: 'Tech Jobs',
				accessor: 'techJobs',
				isIncludedInCalculation: true,
				textAlignment: 'right',
				mask: '999,999,999',
			},
		],
	},
	{
		name: 'Personal',
		metrics: [
			{
				label: 'Happiness',
				accessor: 'happiness',
				isIncludedInCalculation: true,
				textAlignment: 'right',
				mask: '999,999,999',
			},
			{
				label: 'Population',
				accessor: 'population',
				isIncludedInCalculation: true,
				textAlignment: 'right',
				mask: '999,999,999',
			},
		],
	},
].map(mg => ({ ...mg, metrics: mg.metrics.map(m => ({ ...m, isVisible: true, multiplier: 1 })) })) as MetricGroup[];
