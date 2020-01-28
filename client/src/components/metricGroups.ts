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
			{ label: 'Tech Jobs', accessor: 'techJobs' },
		],
	},
	{
		name: 'Personal',
		metrics: [
			{ label: 'Happiness', accessor: 'happiness' },
			{ label: 'Population', accessor: 'population' },
		],
	},
].map(mg => ({ ...mg, metrics: mg.metrics.map(m => ({ ...m, isVisible: true, multiplier: 1 })) }));
