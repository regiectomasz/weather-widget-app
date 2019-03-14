import morgan from 'morgan';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(morgan('tiny'));

export default app;
