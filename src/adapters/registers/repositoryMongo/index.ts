import {MongoRepository} from '../../../infrastructure/mongodb/repository';
import {Application} from '../../../application/application';

export const register = (app: Application): Application => {
  app.setRepository(new MongoRepository());
  return app;
};
