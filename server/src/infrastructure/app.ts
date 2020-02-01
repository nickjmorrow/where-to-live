import express = require('express');
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import { routes } from './routes';
import { applyMiddleware, applyRoutes } from './utils';

export const app = express();

applyMiddleware(middleware, app);
applyRoutes(routes, app);
applyMiddleware(errorHandlers, app);

app.use(express.json());
