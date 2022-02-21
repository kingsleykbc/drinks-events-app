import { Request, Response } from 'express';

export const getEvents = (req: Request, res: Response) => {
	res.json({ HELLO: 'HI' });
};

export const getEvent = (req: Request, res: Response) => {
	res.json({ HELLO: 'NO WAY BRO' });
};
