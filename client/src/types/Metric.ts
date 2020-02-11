export interface Metric {
	label: string;
	accessor: Accessor;
	mask: string;
	textAlignment: 'left' | 'right';
	calculationConfig: CalculationConfig;
}

type Accessor = 'costOfLiving' | 'happiness' | 'population' | 'techJobs';

type SortType = { order: 'ascending' } | { order: 'descending' };

type CalculationConfig =
	| {
			isIncludedInCalculation: true;
			sortType: SortType;
			multiplier: number;
	  }
	| { isIncludedInCalculation: false };
