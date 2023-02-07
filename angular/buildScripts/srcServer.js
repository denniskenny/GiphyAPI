import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import start from '../api/startApp';

const port = 3030;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

start(app, port);