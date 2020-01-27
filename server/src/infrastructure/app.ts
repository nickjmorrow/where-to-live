import express = require('express');
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import { routes } from './routes';
import { applyMiddleware, applyRoutes } from './utils';

export const router = express();

applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

router.use(express.json());
