export const metricGroups = [
	{
		name: 'City',
		metrics: [
			{ label: 'Name', accessor: 'label' },
			{ label: 'Score', accessor: 'score' },
		],
	},
	{
		name: 'Financial',
		metrics: [
			{ label: 'Cost of Living', accessor: 'costOfLiving' },
			{ label: 'Median Income', accessor: 'medianIncome' },
		],
	},
	{
		name: 'Personal',
		metrics: [
			{ label: 'Crime Rate', accessor: 'crimeRate' },
			{ label: 'Population', accessor: 'population' },
		],
	},
].map(mg => ({ ...mg, metrics: mg.metrics.map(m => ({ ...m, isVisible: true, multiplier: 1 })) }));
