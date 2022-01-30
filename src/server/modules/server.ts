import config from '../../../config/config';

import app from './app';

import * as HTTP from 'http';
import * as HTTPS from 'https';

const server = config.ssl
    ? HTTPS.createServer({
        key: config.sslParams.key,
        cert: config.sslParams.cert
    }, app)
    : HTTP.createServer(app);

export default server;
