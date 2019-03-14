import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { join } from 'path';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(morgan('tiny'));

// Serve the static files from the React app
app.use(express.static(join(__dirname, 'build')));

// API routes
app.use('/api/', routes);

export default app;
