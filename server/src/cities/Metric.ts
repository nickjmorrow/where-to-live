export interface Metric {
	label: string;
	// TODO: Use "dynamic" type
	accessor: 'costOfLiving' | 'happiness' | 'population' | 'techJobs';
	mask: string;
	textAlignment: 'left' | 'right';
	calculationConfig: CalculationConfig;
}

type SortType = { order: 'ascending' } | { order: 'descending' };

type CalculationConfig =
	| {
			isIncludedInCalculation: true;
			sortType: SortType;
			multiplier: number;
	  }
	| { isIncludedInCalculation: false };
