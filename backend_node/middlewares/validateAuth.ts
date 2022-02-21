import { NextFunction, Request, RequestHandler, Response } from 'express';
import apiKeys from '../config/apiKeys';

export const validateAuth: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { authorization } = req.headers;
		if (!authorization) throw new Error('Please enter a valid API key in your authorization header.');
		const apiKey = authorization.split(' ')[1];
		if (apiKeys.indexOf(apiKey) === -1) throw Error('Invalid API key.');
		next();
	} catch (e: any) {
		res.status(401).json({ message: `Unauthorized :( ${e.message || 'Enter valid API key.'}.` });
	}
};
