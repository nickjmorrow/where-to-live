import { City } from 'cities/entities/City';

// TODO: Use "dynamic" type
export interface Metric {
	label: string;
	accessor:
		| 'population'
		| 'qualityOfLifeIndex'
		| 'purchasingPowerIndex'
		| 'safetyIndex'
		| 'healthCareIndex'
		| 'costOfLivingIndex'
		| 'propertyPriceToIncomeRatio'
		| 'trafficCommuteTimeIndex'
		| 'pollutionIndex'
		| 'climateIndex';
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
