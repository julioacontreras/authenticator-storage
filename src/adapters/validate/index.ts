import {Validator} from '../../infrastructure/validation';
import {Application} from '../../application/application';

export const register = (app: Application): Application => {  
  app.setValidator(new Validator());
  return app;
};
