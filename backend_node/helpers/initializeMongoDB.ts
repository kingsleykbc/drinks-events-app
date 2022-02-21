import mongoose from 'mongoose';
import { ConnectionOptions } from 'tls';

const connectionString: string = process.env.MONGODB_URI as string;
const options: ConnectionOptions = { useNewUrlParser: true, useUnifiedTopology: true } as ConnectionOptions;

mongoose
	.connect(connectionString, options)
	.then(() => console.log('Mongo DB Connected'))
	.catch(e => console.log('Error connecting to Mongo DB: ', e.message));

mongoose.connection.close();
