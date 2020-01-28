import { CityModel } from 'cities/CityModel';

export interface Metric {
	label: string;
	accessor: keyof CityModel;
	multiplier: number;
	isIncludedInCalculation: boolean;
}
