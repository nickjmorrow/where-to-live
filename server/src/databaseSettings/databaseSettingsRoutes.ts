import { Request, Response } from 'express';
import { databaseSettingsProvider } from './databaseSettingsProvider';
import { Route } from '../infrastructure/types';

export const databaseSettingsRoutes: Route[] = [
	{
		path: '/databasesettings',
		method: 'get',
		handler: async (req: Request, res: Response) => {
			const databaseSettings = await databaseSettingsProvider.getDatabaseSettings();
			res.json(databaseSettings);
		},
	},
];
