import {MongoConnector} from '../../../infrastructure/mongodb/connector';
import {Application} from '../../../application/application';

require('dotenv').config();

export const register = async (app: Application): Promise<Application> => {
  const db = await MongoConnector.connect({
    url: process.env.DB_URL,
    options: {
      autoIndex: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  });
  app.connectDatabase(db);
  return app;
};
