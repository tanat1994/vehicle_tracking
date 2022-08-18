import dotenv from 'dotenv';
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 1337;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';

const ServerConfig = {
    port: SERVER_PORT,
    hostname: SERVER_HOSTNAME,
}

export default ServerConfig;