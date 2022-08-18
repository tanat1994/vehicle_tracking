import 'reflect-metadata';
import { DataSource } from 'typeorm';
import DatabaseConfig from '../configs/database.config';

const { type, hostname, username, password, port, dbname } = DatabaseConfig;
const AppDataSource = new DataSource({
    type,
    host: hostname,
    port,
    username,
    password,
    database: dbname,
    logging: false,
    synchronize: true,
    entities: ["src/entities/*.ts"],
});

export const getDataSource = (): Promise<DataSource> => {
    return new Promise((resolve, reject) => {
        if (AppDataSource.isInitialized) {
            resolve(AppDataSource);
        } else {
            reject("Failed to connect to db");
        }
    });
}

export default AppDataSource;