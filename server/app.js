import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { join } from 'path';

import config from './config';
import routes from './routes';

const APP_CONFIG = config.get('app');

const app = express();

app.use(cors({
	origin: APP_CONFIG.host
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

// Serve the static files from the React app
app.use(express.static(join(__dirname, 'build')));

// API routes
app.use('/api/', routes);

export default app;
