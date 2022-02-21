import { Request, Response } from 'express';
import Event from '../models/events.model';

/**
 * RETURN ALL THE EVENTS IN THE DATABASE
 * If query params are passed, filter the data according to the param values.
 * @param {Request} req
 * @param {Response} res
 */
export const getEvents = async (req: Request, res: Response) => {
	try {
		const { query } = req;

		// Setup filters (based on the queries)
		const { keyword, type } = query as { keyword?: string; type?: string };
		const filter: { [key: string]: any } = {};
		if (keyword?.trim())
			filter['$or'] = [
				{ title: { $regex: keyword, $options: 'i' } },
				{ 'creator.name': { $regex: keyword, $options: 'i' } },
				{ 'location.name': { $regex: keyword, $options: 'i' } }
			];
		if (type?.trim()) filter.type = type;

		// Retrieve events
		const events = await Event.find(filter, { title: 1, id: 1, time: 1, category: 1 });
		res.json(events);
	} catch (e) {
		res.status(500).send('Internal Server Error');
	}
};

/**
 * RETURN DETAILS OF A SINGLE EVENT
 * @param {Request} req
 * @param {Response} res
 */
export const getEvent = async (req: Request, res: Response) => {
	try {
		const id = req.params.eventID;
		const event = await Event.findOne({ id });

		// Throw error if event not found
		if (!event) throw new Error('Not Found');

		// Send data
		res.json(event);
	} catch (e: any) {
		if (e.message === 'Not Found') res.status(404).send('Event Not Found');
		else res.status(500).send('Internal Server Error');
	}
};
