import {HTTPServer} from '../../../infrastructure/http/server';
import {Application} from '../../../application/application';

const config = {
  port: process.env.HTTP_PORT,
};

export const register = (app: Application): Application => {
  app.startServer(HTTPServer, config);
  return app;
};
