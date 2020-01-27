// Config that is common to more than one part of the app.
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { entities } from '../entities';

const typeOrmConfig: PostgresConnectionOptions = {
	type: 'postgres',
	host: process.env.TYPEORM_HOST,
	port: parseInt(process.env.TYPEORM_PORT!, 10),
	username: process.env.TYPEORM_USERNAME,
	password: process.env.TYPEORM_PASSWORD,
	database: process.env.TYPEORM_DATABASE,
	synchronize: false,
	logging: false,
	extra: {
		max: 2,
		min: 1,
	},
	entities,
};

export { typeOrmConfig };
