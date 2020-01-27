import { getConnection } from 'typeorm';
import { DatabaseSetting } from './models/DatabaseSetting';

export const databaseSettingsProvider = {
	getDatabaseSettings: async () => {
		const databaseSettingsRepo = await getConnection().getRepository(DatabaseSetting);
		return await databaseSettingsRepo.find();
	},
};
