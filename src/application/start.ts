
import dotenv from 'dotenv';
dotenv.config();

import {Application} from './application';
import {register as registerMetric} from '../adapters/metrics';
import {register as registerSecurityAccess} from '../adapters/securityAccess';
import {register as registerValidate} from '../adapters/validate';
// import {register as registerServer} from '../adapters/serverHTTP';
import {register as registerServer} from '../adapters/serverGRPC';
import {register as registerDatabase} from '../adapters/dbMongo';
import {register as registerUserRepository} from '../adapters/userRepository';
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
