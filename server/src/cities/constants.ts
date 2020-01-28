import { Metric } from 'cities/Metric';
import { MetricGroup } from 'cities/MetricGroup';

export const metrics: Metric[] = [
	{ isIncludedInCalculation: true, label: 'Cost of Living', accessor: 'costOfLiving', multiplier: 1 },
	{ isIncludedInCalculation: true, label: 'Happiness', accessor: 'happiness', multiplier: 1 },
	{ isIncludedInCalculation: true, label: 'Population', accessor: 'population', multiplier: 1 },
	{ isIncludedInCalculation: true, label: 'Tech Jobs', accessor: 'techJobs', multiplier: 1 },
];

// TODO: should not need type assertion
export const metricGroups: MetricGroup[] = [
	{
		name: 'City',
		metrics: [
			{ label: 'Name', accessor: 'label', isIncludedInCalculation: false },
			{ label: 'Score', accessor: 'score', isIncludedInCalculation: false },
		],
	},
	{
		name: 'Financial',
		metrics: [
			{ label: 'Cost of Living', accessor: 'costOfLiving', isIncludedInCalculation: true },
			{ label: 'Tech Jobs', accessor: 'techJobs', isIncludedInCalculation: true },
		],
	},
	{
		name: 'Personal',
		metrics: [
			{ label: 'Happiness', accessor: 'happiness', isIncludedInCalculation: true },
			{ label: 'Population', accessor: 'population', isIncludedInCalculation: true },
		],
	},
].map(mg => ({ ...mg, metrics: mg.metrics.map(m => ({ ...m, isVisible: true, multiplier: 1 })) })) as MetricGroup[];
