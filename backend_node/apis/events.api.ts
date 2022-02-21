import { Router } from 'express';
import { getEvent, getEvents } from '../controllers/events.controller';
import { validateAuth } from '../middlewares/validateAuth';
const api = Router();

// Return all events
api.get('/', validateAuth, getEvents);

// Return a specific event
api.get('/:eventID', validateAuth, getEvent);

export default api;
