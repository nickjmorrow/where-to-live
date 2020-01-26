import { Metric } from 'types/Metric';

export interface MetricGroup {
	name: string;
	metrics: Metric[];
}
