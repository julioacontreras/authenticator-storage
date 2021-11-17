import {Validator} from 'akuma-validation/lib';
import {Application} from '../../application/application';

export const register = (app: Application): Application => {  
  app.setValidator(new Validator());
  return app;
};
