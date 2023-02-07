import express from 'express';
import compression from 'compression';
import start from '../api/startApp'

const port = 3040;
const app = express();

app.use(compression());
app.use(express.static('dist'));

start(app, port);