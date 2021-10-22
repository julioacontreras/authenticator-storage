import {Application} from './application';

import {register as registerAuth} from '../adapters/registers/authjwt';
import {register as registerServer} from '../adapters/registers/serverHTTP';
// import {register as registerServer} from '../adapters/registers/serverGRPC';
import {register as registerDatabase} from '../adapters/registers/dbMongo';
import {register as registerRepository} from '../adapters/registers/repositoryMongo';
import {register as registerCreateUser} from './usecases/registerCreateUser';
import {register as registerDeleteUser} from './usecases/registerDeleteUser';

export const start = async () => {
  let app = new Application();
  app = registerAuth(app);
  app = await registerDatabase(app);
  app = registerRepository(app);
  app = registerCreateUser(app);
  app = registerDeleteUser(app);
  registerServer(app);
};
