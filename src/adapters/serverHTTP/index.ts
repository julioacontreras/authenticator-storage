import {HTTPServer} from 'akuma-http/lib/server';
import {Application} from '../../application/application';

const config = {
  port: process.env.SERVER_HTTP_PORT,
};

export const register = (app: Application): Application => {
  app.startServer(HTTPServer, config);
  return app;
};
