import {Validator} from '../../../infrastructure/validation';
import {Application} from '../../../application/application';

const config = {
  port: process.env.HTTP_PORT,
};

export const register = (app: Application): Application => {  
  app.setValidator(new Validator());
  return app;
};
