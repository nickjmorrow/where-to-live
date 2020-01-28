import { Metric } from 'cities/Metric';

export const metrics: Metric[] = [
	{ label: 'Cost of Living', accessor: 'costOfLiving', multiplier: 1 },
	{ label: 'Happiness', accessor: 'happiness', multiplier: 1 },
	{ label: 'Population', accessor: 'population', multiplier: 1 },
	{ label: 'Tech Jobs', accessor: 'techJobs', multiplier: 1 },
];
