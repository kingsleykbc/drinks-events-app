import axios from 'axios';
import { EventType } from '../../types';
import Event from '../models/events.model';

// Get the events from the external API and store them in MongoDB
const retrieveEvents = async () => {
	try {
		const response = await axios.get('https://mock-api.drinks.test.siliconrhino.io/events');
		const apiEvents: EventType[] = response.data;

		for (let i = 0; i < apiEvents.length; i++) {
			const newEvent = apiEvents[i];
			const existingEvent = await Event.findOne({ id: newEvent.id });
			if (existingEvent != null) continue;
			await Event.create(apiEvents[i]);
		}
	} catch (e: any) {
		console.log('Error getting events', e.message);
	}
};
export default retrieveEvents;
