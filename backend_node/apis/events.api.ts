import { Router } from 'express';
import { getEvent, getEvents } from '../controllers/events.controller';
const api = Router();

// All events
api.get('/', getEvents);

// Specific event
api.get('/:eventID', getEvent);

export default api;
