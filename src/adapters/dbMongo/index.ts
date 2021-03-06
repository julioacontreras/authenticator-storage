import {MongoConnector} from 'akuma-mongodb/lib/connector';
import {Application} from '../../application/application';
import {MongoRepository} from 'akuma-mongodb/lib/repository';

export const register = async (app: Application): Promise<Application> => {
  const db = await MongoConnector.connect({
    url: process.env.DB_URL,
    options: {
      autoIndex: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  });
  app.Repository = MongoRepository
  app.setDatabase(db)
  return app;
};
