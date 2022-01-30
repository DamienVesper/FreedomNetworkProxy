import config from '../../config/config';

import server from './modules/server';

// Listen on specified port.
server.listen(config.port);
