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
				label: 'CoL',
				accessor: 'costOfLivingIndex',
				textAlignment: 'right',
				mask: '999,999,999.99',
				calculationConfig: {
					sortType: {
						order: 'ascending',
					},
					multiplier: 1,
					isIncludedInCalculation: true,
				},
			},
			{
				label: 'Pur. Power Idx',
				accessor: 'purchasingPowerIndex',
				textAlignment: 'right',
				mask: '999,999,999.99',
				calculationConfig: {
					sortType: {
						order: 'descending',
					},
					multiplier: 1,
					isIncludedInCalculation: true,
				},
			},
			// {
			// 	label: 'Property Price to Income ratio',
			// 	accessor: 'propertyPriceToIncomeRatio',
			// 	textAlignment: 'right',
			// 	mask: '999,999,999.99',
			// 	calculationConfig: {
			// 		sortType: {
			// 			order: 'ascending',
			// 		},
			// 		multiplier: 1,
			// 		isIncludedInCalculation: true,
			// 	},
			// },
			// {
			// 	label: 'Health Care Index',
			// 	accessor: 'healthCareIndex',
			// 	textAlignment: 'right',
			// 	mask: '999,999,999.99',
			// 	calculationConfig: {
			// 		sortType: {
			// 			order: 'descending',
			// 		},
			// 		multiplier: 1,
			// 		isIncludedInCalculation: true,
			// 	},
			// },
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
				calculationConfig: {
					sortType: {
						order: 'descending',
					},
					multiplier: 1,
					isIncludedInCalculation: true,
				},
			},
			{
				label: 'QoL Idx',
				accessor: 'qualityOfLifeIndex',
				textAlignment: 'right',
				mask: '999,999,999.99',
				calculationConfig: {
					sortType: {
						order: 'descending',
					},
					multiplier: 1,
					isIncludedInCalculation: true,
				},
			},
			{
				label: 'Safety Idx',
				accessor: 'safetyIndex',
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
			// {
			// 	label: 'TCT Idx',
			// 	accessor: 'trafficCommuteTimeIndex',
			// 	textAlignment: 'right',
			// 	mask: '999,999,999.99',
			// 	calculationConfig: {
			// 		sortType: {
			// 			order: 'ascending',
			// 		},
			// 		multiplier: 1,
			// 		isIncludedInCalculation: true,
			// 	},
			// },
			// {
			// 	label: 'Pollution Index',
			// 	accessor: 'pollutionIndex',
			// 	textAlignment: 'right',
			// 	mask: '999,999,999.99',
			// 	calculationConfig: {
			// 		sortType: {
			// 			order: 'ascending',
			// 		},
			// 		multiplier: 1,
			// 		isIncludedInCalculation: true,
			// 	},
			// },
			// {
			// 	label: 'Climate Index',
			// 	accessor: 'climateIndex',
			// 	textAlignment: 'right',
			// 	mask: '999,999,999.99',
			// 	calculationConfig: {
			// 		sortType: {
			// 			order: 'descending',
			// 		},
			// 		multiplier: 1,
			// 		isIncludedInCalculation: true,
			// 	},
			// },
		],
	},
];

export const metrics: Metric[] = metricGroups.reduce<Metric[]>((agg, cur) => [...agg, ...cur.metrics], []);
