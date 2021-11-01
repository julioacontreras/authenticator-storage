
import {Application} from './application';

import {register as registerMetric} from '../adapters/registers/metrics';
import {register as registerSecurityAccess} from '../adapters/registers/securityAccess';
import {register as registerValidate} from '../adapters/registers/validate';
// import {register as registerServer} from '../adapters/registers/serverHTTP';
import {register as registerServer} from '../adapters/registers/serverGRPC';
import {register as registerDatabase} from '../adapters/registers/dbMongo';
import {register as registerUserRepository} from '../adapters/registers/userRepository';
import {register as registerCreateUser} from './usecases/registerCreateUser';
import {register as registerDeleteUser} from './usecases/registerDeleteUser';
import {register as registerFindUser} from './usecases/registerFindUser';
import {register as registerFindUsers} from './usecases/registerFindUsers';
import {register as registerUpdateUser} from './usecases/registerUpdateUser';

export const start = async () => {
  let app = new Application();
  app = await registerMetric(app);
  app = registerSecurityAccess(app);
  app = registerValidate(app);
  app = await registerDatabase(app);
  app = registerUserRepository(app);
  app = registerCreateUser(app);
  app = registerDeleteUser(app);
  app = registerFindUser(app);
  app = registerFindUsers(app);
  app = registerUpdateUser(app);
  registerServer(app);
};
