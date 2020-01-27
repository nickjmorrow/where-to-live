import { NextFunction, Request, Response } from 'express';
import passport = require('passport');

type Handler = (req: Request, res: Response, next: NextFunction) => Promise<void> | void;

export interface Route {
	path: string;
	method: 'get' | 'post' | 'put' | 'delete';
	authentication?: () => ReturnType<typeof passport.authenticate>;
	handler: Handler | Handler[];
}
