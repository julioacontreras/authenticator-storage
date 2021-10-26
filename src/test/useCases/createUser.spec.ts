import {Application} from '../../application/application';
import { MockServerAdapter } from '../mocks/transport/interface';

import {register as registerSecurityAccess} from '../../adapters/registers/securityAccess';
import {register as registerValidate} from '../../adapters/registers/validate';
import {register as registerServer} from '../mocks/transport/register';
import {register as registerDatabase} from '../mocks/database/register';
import {register as registerUserRepository} from '../../adapters/registers/userRepository';
import {register as registerCreateUser} from '../../application/usecases/registerCreateUser';
import {register as registerDeleteUser} from '../../application/usecases/registerDeleteUser';

describe('Create User', () => {
  let app: Application

  beforeEach(async () => {
    app = new Application();
    app = registerSecurityAccess(app);
    app = registerValidate(app);
    app = await registerDatabase(app);
    app = registerUserRepository(app);
    app = registerCreateUser(app);
    app = registerDeleteUser(app);
    return registerServer(app);  
  });

  test('Test wrong payload', async () => {
    const payload = {
      token: '',
      action: '',
      data: ''
    }
    try {
      const server = app.getServer() as MockServerAdapter;
      await server.sendAction(payload)
      expect(1).toEqual(0)
    } 
    catch (err) {
      expect(err.message).toEqual('Not found action')
    }
  })
})
