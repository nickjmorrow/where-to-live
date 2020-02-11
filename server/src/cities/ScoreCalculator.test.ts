import 'reflect-metadata';
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
	isVisible: true,
	...obj,
});

describe('score calculator', () => {
	it('same multpliers', () => {
		const cities: CityModel[] = [
			{ cityId: 1, population: 5000, costOfLiving: 60 },
			{ cityId: 2, population: 10000, costOfLiving: 30 },
		].map(toCity);
		const metrics: Metric[] = [
			{
				accessor: 'costOfLiving',
				label: 'Cost of Living',
				mask: '',
				textAlignment: 'left',
				calculationConfig: { multiplier: 1, isIncludedInCalculation: true, sortType: { order: 'descending' } },
			},
			{
				accessor: 'population',
				label: 'Population',
				mask: '',
				textAlignment: 'left',
				calculationConfig: { multiplier: 1, isIncludedInCalculation: true, sortType: { order: 'descending' } },
			},
		];

		const actual = new ScoreCalculator().calculateScores(cities, metrics);
		const expected: typeof actual = [
			{ ...cities[0], score: 100 },
			{ ...cities[1], score: 100 },
		];

		expect(actual).toEqual(expected);
	});

	it('different multipliers', () => {
		const cities: CityModel[] = [
			{ cityId: 1, population: 5000, costOfLiving: 60 },
			{ cityId: 2, population: 10000, costOfLiving: 30 },
		].map(toCity);

		const metrics: Metric[] = [
			{
				accessor: 'costOfLiving' as const,
				label: 'Cost of Living',
				mask: '',
				textAlignment: 'left',
				calculationConfig: { multiplier: 2, isIncludedInCalculation: true, sortType: { order: 'descending' } },
			},
			{
				accessor: 'population' as const,
				label: 'Population',
				mask: '',
				textAlignment: 'left',
				calculationConfig: { multiplier: 1, isIncludedInCalculation: true, sortType: { order: 'descending' } },
			},
		];

		const actual = new ScoreCalculator().calculateScores(cities, metrics);
		const expected: typeof actual = [
			{ ...cities[0], score: 100 },
			{ ...cities[1], score: 80 },
		];

		expect(actual).toEqual(expected);
	});

	it('one metric', () => {
		const cities: CityModel[] = [
			{ cityId: 1, costOfLiving: 60 },
			{ cityId: 2, costOfLiving: 30 },
		].map(toCity);

		const metrics: Metric[] = [
			{
				accessor: 'costOfLiving' as const,
				label: 'Cost of Living',
				mask: '',
				textAlignment: 'left',
				calculationConfig: { multiplier: 1, isIncludedInCalculation: true, sortType: { order: 'descending' } },
			},
		];

		const actual = new ScoreCalculator().calculateScores(cities, metrics);
		const expected: typeof actual = [
			{ ...cities[0], score: 100 },
			{ ...cities[1], score: 50 },
		];

		expect(actual).toEqual(expected);
	});

	it('ascending', () => {
		const cities: CityModel[] = [
			{ cityId: 1, costOfLiving: 80 },
			{ cityId: 2, costOfLiving: 20 },
		].map(toCity);

		const metrics: Metric[] = [
			{
				accessor: 'costOfLiving' as const,
				label: 'Cost of Living',
				mask: '',
				textAlignment: 'left',
				calculationConfig: { multiplier: 1, isIncludedInCalculation: true, sortType: { order: 'ascending' } },
			},
		];

		const actual = new ScoreCalculator().calculateScores(cities, metrics);
		const expected: typeof actual = [
			{ ...cities[0], score: 25 },
			{ ...cities[1], score: 100 },
		];

		expect(actual).toEqual(expected);
	});
});
