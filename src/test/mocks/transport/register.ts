import {MockServer} from './transport';
import {Application} from '../../../application/application';

const config = {
};

export const register = (app: Application): Application => {
  app.startServer(MockServer, config);
  return app;
};
