import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
import './helpers/initializeMongoDB';

import events from './apis/events.api';

const api = express();

api.use(express.json());
api.use('/events', events);

api.get('/', (req, res) => {
	res.send('Well done!');
});

api.listen(8080, () => {
	console.log('The application is listening on port 3000!');
});
