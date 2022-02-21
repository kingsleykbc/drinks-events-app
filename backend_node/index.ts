import express from 'express';
import events from './apis/events.api';
import retrieveEvents from './jobs/retrieveEvents';
declare function require(name: string): any;
const cron = require('node-cron');

// Initialize Global variables
import dotenv from 'dotenv';
dotenv.config();

// Connect to DB
import './helpers/initializeMongoDB';

// APIs
const api = express();
api.use(express.json());
api.use('/events', events);
api.get('/', (req, res) => res.redirect('https://drinks-events-app.netlify.app'));

// Start server
api.listen(process.env.PORT, () => {
	console.log(`The application is listening on port ${process.env.PORT}!`);
});

// Retrieve events every 3 hours (scheduled)
cron.schedule('0 0 */3 * * *', () => retrieveEvents());
