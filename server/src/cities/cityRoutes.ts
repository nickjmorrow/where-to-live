import { container } from 'tsyringe';
import { Route } from '../infrastructure/types';
import { CityProvider } from 'cities/CityProvider';

export const routes: Route[] = [
	{
		path: '/cities',
		method: 'get',
		handler: async (req, res) => {
			res.json(await container.resolve(CityProvider).getCities());
		},
	},
];
