import {securityAccess} from '../../infrastructure/securityAccess';
import {Application} from '../../application/application';

export const register = (app: Application): Application => {
  app.setSecurityAccess(securityAccess);
  return app;
};
