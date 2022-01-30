import config from '../../../config/config';

import * as Corrosion from 'corrosion';

const proxy = new Corrosion({
    prefix: config.prefix,
    title: config.title,
    codec: config.codec,

    forceHttps: true,
    standardMiddleware: true,
    requestMiddleware: [
        Corrosion.middleware.blacklist((config.blacklist ?? []), `This page has been blocked!`)
    ]
});

export default proxy;
