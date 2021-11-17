import {securityAccess} from 'akuma-security-access/lib';
import {Application} from '../../application/application';

export const register = (app: Application): Application => {
  app.setSecurityAccess(securityAccess);
  return app;
};
