const mongoose = require('mongoose');
import {ConnectorAdapter} from 'akuma-microservice-framework/lib/adapters/db/connector';
import {printStartService} from 'akuma-microservice-framework/lib/infrastructure/display';

interface ConfigMongo {
  url: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let connection: any = null;

const MongoConnector = {
  connect: async (configInstance: unknown) => {
    const config = configInstance as ConfigMongo;
    printStartService('Database connecting...', config.url);
    connection = await mongoose.connect(config.url);
    printStartService('Database connected', config.url);
    return mongoose;
  },
  close: async () => {
    if (connection) {
      await connection.close();
    }
  },
} as ConnectorAdapter;

export {MongoConnector};
