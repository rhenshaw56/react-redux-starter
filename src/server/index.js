// packages
import express from 'express';
import cors from 'cors';
import webpack from 'webpack';
import webpackDevMiddleWare from 'webpack-dev-middleware';
import webpackHotServer from 'webpack-hot-middleware';
// files
import webpackConfig from '../../config/webpack.config';


const app = express();

app.use(cors());

app.use(webpackDevMiddleWare({
    compiler, {
        noInfo : true,
        publicPath : webpackConfig.output.publicPath,
    }
}));

app.use(webpackHotMiddleware(compiler, {
    'log': false,
    'path': '/__webpack_hmr',
    'heartbeat': 10 * 1000
}));


export default app;

