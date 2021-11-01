import {AuthJWT} from '../../../infrastructure/authjwt/auth';
import {Application} from '../../../application/application';

export const register = (app: Application): Application => {
  // app.setAuth(new AuthJWT());
  return app;
};
