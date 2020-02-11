export interface Metric {
	label: string;
	accessor: string;
	isVisible: boolean;
	multiplier: number;
	isIncludedInCalculation: boolean;
	textAlignment: 'left' | 'right';
	mask: string;
}
