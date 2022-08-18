import ServerConfig from './configs/server.config';
import { SetupServer } from './server';
import Logger from './utils/logger';
import AppDataSource from './services/database-connection';

export default (async (): Promise<void> => {
    try {
        const port = ServerConfig.port as number;
        const server = new SetupServer(port);
        await server.init();
        server.start();
    } catch (e) {
        Logger.error(e);
        process.exit(1);
    }
})();