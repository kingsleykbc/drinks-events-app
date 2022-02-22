import express from 'express';
import events from './apis/events.api';
import retrieveEvents from './jobs/retrieveEvents';
import helmet from 'helmet';
declare function require(name: string): any;
const cron = require('node-cron');
const cors = require('cors');

// Initialize Global variables
import dotenv from 'dotenv';
dotenv.config();

// Connect to DB
import './helpers/initializeMongoDB';

// APIs
const api = express();

// Setup cors
api.all('*', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
	next();
});
api.use(cors());
api.use(helmet());
api.use(express.json());
api.use('/events', events);
api.get('/', (req, res) => res.redirect('https://siliconrhino-drinks.netlify.app/'));

// Start server
api.listen(process.env.PORT, () => {
	console.log(`The application is listening on port ${process.env.PORT}!`);
});

// Retrieve events every 3 hours (scheduled)
cron.schedule('0 0 */3 * * *', () => retrieveEvents());
