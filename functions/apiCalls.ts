import axios from 'axios';
import { EventListItemType, EventType } from '../config/types';
import { REST_URL, API_KEY } from '../config/config';

/**
 * FETCH EVENT LIST
 *
 * @param {string} keyword - Event Keyword filter
 * @param {string} type - Event type filter
 * @returns
 */
export const fetchEvents = async (keyword = '', type = '') => {
	try {
		const res = await axios.get(`${REST_URL}/events?keyword=${keyword}&type=${type}`, {
			headers: { Authorization: `Bearer ${API_KEY}` }
		});
		const data: EventListItemType[] = res.data;
		return data;
	} catch (e: any) {
		throw { status: e.response.status, message: e.response.data.message };
	}
};

/**
 * FETCH EVENT DETAILS
 *
 * @param {number} id - Event ID
 * @returns
 */
export const fetchEvent = async (id: number) => {
	try {
		const res = await axios.get(`${REST_URL}/events/${id}`, {
			headers: { Authorization: `Bearer ${API_KEY}` }
		});
		const data: EventType = res.data;
		return data;
	} catch (e: any) {
		throw { status: e.response.status, message: e.response.data };
	}
};
