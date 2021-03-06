import * as path from 'path';

const config = {
    port: 8443,

    ssl: false,
    sslParams: {
        key: path.resolve(__dirname, `../certs/default.key`),
        cert: path.resolve(__dirname, `../certs/default.cert`)
    },

    title: `FreedomNetworkProxy`,
    prefix: `/astrox/`,
    codec: `xor`,
    blacklist: [`accounts.google.com`],
    smokeprefix: `/astrox2/`
};

export default config;
