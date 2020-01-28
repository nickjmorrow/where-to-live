import { container } from 'tsyringe';
import { Route } from '../infrastructure/types';
import { CityProvider } from 'cities/CityProvider';
import { ScoreCalculator } from 'cities/ScoreCalculator';
import { metrics } from 'cities/constants';

export const routes: Route[] = [
	{
		path: '/cities',
		method: 'get',
		handler: async (req, res) => {
			res.json(await container.resolve(CityProvider).getCities());
		},
	},
	{
		path: '/defaultCityScores',
		method: 'get',
		handler: async (req, res) => {
			const cities = await container.resolve(CityProvider).getCities();
			res.json(container.resolve(ScoreCalculator).calculateScores(cities, metrics));
		},
	},
	{
		path: '/calculateScores',
		method: 'post',
		handler: async (req, res) => {
			const { cities, metrics } = req.body;
			res.json(container.resolve(ScoreCalculator).calculateScores(cities, metrics));
		},
	},
	{
		path: '/metrics',
		method: 'get',
		handler: async (req, res) => {
			res.json(metrics);
		},
	},
];
