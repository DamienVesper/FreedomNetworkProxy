import config from '../../config/config';

import server from './modules/server';

const main = async (): Promise<void> => {
    // Listen on specified port.
    server.listen(config.port);
};

void main();
