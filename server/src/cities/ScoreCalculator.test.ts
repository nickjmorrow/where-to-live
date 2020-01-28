import { ScoreCalculator } from 'cities/ScoreCalculator';
import { CityModel } from 'cities/CityModel';
import { Metric } from 'cities/Metric';

const toCity = (obj: {}): CityModel => ({
	cityId: 0,
	population: 0,
	costOfLiving: 0,
	happiness: 0,
	techJobs: 0,
	label: '',
	...obj,
});
const toMetric = (obj: {}): Metric => ({ accessor: 'name', label: '', multiplier: 2, ...obj });

describe('score calculator', () => {
	it('works', () => {
		const cities: CityModel[] = [
			{ cityId: 1, population: 5000, costOfLiving: 60 },
			{ cityId: 2, population: 10000, costOfLiving: 30 },
		].map(toCity);
		const metrics: Metric[] = [
			{ accessor: 'costOfLiving', multiplier: 1 },
			{ accessor: 'population', multiplier: 1 },
		].map(toMetric);

		const actual = new ScoreCalculator().calculateScores(cities, metrics);
		const expected: typeof actual = [
			{ ...cities[0], score: 100 },
			{ ...cities[1], score: 100 },
		];

		expect(actual).toEqual(expected);
	});
	it('works', () => {
		const cities: CityModel[] = [
			{ cityId: 1, population: 5000, costOfLiving: 60 },
			{ cityId: 2, population: 10000, costOfLiving: 30 },
		].map(toCity);

		const metrics: Metric[] = [
			{ label: '', accessor: 'costOfLiving', multiplier: 2 },
			{ label: '', accessor: 'population', multiplier: 1 },
		];

		const actual = new ScoreCalculator().calculateScores(cities, metrics);
		const expected: typeof actual = [
			{ ...cities[0], score: 100 },
			{ ...cities[1], score: 80 },
		];

		expect(actual).toEqual(expected);
	});
});
