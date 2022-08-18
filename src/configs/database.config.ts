import dotenv from 'dotenv';
import { IDatabaseConfig, AllowDbTypes } from '../interfaces/config.interface';
dotenv.config();


const DATABASE_PORT = Number(process.env.DATABASE_PORT) || 3306;
const DATABASE_HOSTNAME = process.env.DATABASE_HOSTNAME || 'localhost';
const DATABASE_NAME = process.env.DATABASE_NAME || 'tempdb';
const DATABASE_USERNAME = process.env.DATABASE_USERNAME || 'user';
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'password';
const DATABASE_TYPE = process.env.DATABASE_TYPE as AllowDbTypes || 'mysql';

const DatabaseConfig: IDatabaseConfig = {
    port: DATABASE_PORT,
    hostname: DATABASE_HOSTNAME,
    dbname: DATABASE_NAME,
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    type: DATABASE_TYPE,
}

export default DatabaseConfig;