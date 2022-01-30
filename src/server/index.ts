import config from '../../config/config';

import server from './modules/server';

import log from './utils/log';
import { logSplash, logHeader } from './utils/logExtra';

const main = async (): Promise<void> => {
    logSplash();

    // Listen on specified port.
    server.listen(config.port, () => {
        log(`green`, `Server is listening on port ${config.port}.`);
        logHeader();
    });
};

void main();
