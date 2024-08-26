import { startServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

startServer();
initMongoConnection();
