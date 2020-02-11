import { MetricGroup } from 'cities/MetricGroup';
import { Metric } from 'cities/Metric';

// TODO: should not need type assertion
// TODO: get rid of any
export const metricGroups: MetricGroup[] = [
	{
		name: 'City',
		metrics: [
			{
				label: 'Name',
				accessor: 'label' as any,
				textAlignment: 'left',
				mask: '999,999,999',
				calculationConfig: {
					isIncludedInCalculation: false,
				},
			},
			{
				label: 'Score',
				accessor: 'score' as any,
				textAlignment: 'right',
				mask: '999,999,999',
				calculationConfig: {
					isIncludedInCalculation: false,
				},
			},
		],
	},
	{
		name: 'Financial',
		metrics: [
			{
				label: 'Cost of Living',
				accessor: 'costOfLiving',
				textAlignment: 'right',
				mask: '999,999,999',
				calculationConfig: {
					sortType: {
						order: 'ascending',
					},
					multiplier: 1,
					isIncludedInCalculation: true,
				},
			},
			{
				label: 'Tech Jobs',
				accessor: 'techJobs',
				textAlignment: 'right',
				mask: '999,999,999',
				calculationConfig: {
					sortType: {
						order: 'descending',
					},
					multiplier: 1,
					isIncludedInCalculation: true,
				},
			},
		],
	},
	{
		name: 'Personal',
		metrics: [
			{
				label: 'Happiness',
				accessor: 'happiness',
				textAlignment: 'right',
				mask: '999,999,999',
				calculationConfig: {
					sortType: {
						order: 'descending',
					},
					multiplier: 1,
					isIncludedInCalculation: true,
				},
			},
			{
				label: 'Population',
				accessor: 'population',
				textAlignment: 'right',
				mask: '999,999,999',
				calculationConfig: {
					sortType: {
						order: 'descending',
					},
					multiplier: 1,
					isIncludedInCalculation: true,
				},
			},
		],
	},
];

export const metrics: Metric[] = metricGroups.reduce<Metric[]>((agg, cur) => [...agg, ...cur.metrics], []);
