import {MockConnector} from '../../mocks/database/connector';
import {MockRepository} from '../../mocks/database/repository';
import {Application} from '../../../application/application';

require('dotenv').config();

export const register = async (app: Application): Promise<Application> => {
  const db = await MockConnector.connect({
    url: process.env.DB_URL,
    options: {
      autoIndex: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  });
  app.Repository = MockRepository
  app.setDatabase(db)
  return app;
};
