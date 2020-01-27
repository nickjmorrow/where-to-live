import '../registerAliases';
import dotenv from 'dotenv';

dotenv.config();

import http from 'http';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { router } from './app';
import { typeOrmConfig } from './config';
import { logger } from './logger';

process.on('uncaughtException', e => {
	logger.error(e);
	process.exit(1);
});

process.on('unhandledRejection', e => {
	logger.error(e!);
	process.exit(1);
});

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

(async () => {
	await createConnection(typeOrmConfig);
})();

server.listen(PORT, async () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
