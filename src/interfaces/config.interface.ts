import { DataSource } from 'typeorm';
export type AllowDbTypes = 'mysql' | 'mssql' | 'postgres';
export interface IDatabaseConfig {
    type: AllowDbTypes;
    hostname: string;
    port: number;
    username: string;
    password: string;
    dbname: string;
}

export interface IDatabaseConnection {
    AppDataSource: DataSource;
    init(): Promise<void>;
}