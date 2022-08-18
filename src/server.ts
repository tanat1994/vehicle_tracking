import Express from 'express';
import Routes from './routes';
import Logger from './utils/logger';
import AppDataSource from './services/database-connection';

export class SetupServer {
    private port?: number;
    private app = Express();
    constructor(port: number = 3000) {
        this.port = port;
    }

    public async init(): Promise<void>{
        this.setupExpress();
        await this.initDb();
    }

    public async initDb(): Promise<void> {
        try {
            await AppDataSource.initialize();
            Logger.info(`Initialize Database`);
        } catch (e) {
            Logger.error(e);
        }
    }

    public setupExpress(): void {
        this.app.use(Express.json());
        this.app.use('/', Routes);
    }

    public start(): void {
        this.app.listen(this.port, () => {
            Logger.info(`Server listening on localhost:${this.port}`);
        });
    }
}