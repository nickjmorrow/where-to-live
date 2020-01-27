import { CityModel } from "cities/CityModel";

export interface Metric {
	accessor: keyof CityModel;
	multiplier: number;
}
