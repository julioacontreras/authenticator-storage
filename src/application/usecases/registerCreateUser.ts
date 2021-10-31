import {Application} from '../application';
import {Action} from '../../adapters/interfaces/transport/action';
import {CreateUser} from './user/createUser';
import {CreateUserParams} from '../../domain/user/services/createUserInterface';

export const register = (app: Application): Application => {
  const createUser = new CreateUser(app.getUserRepository(), app.getValidator());
  const action = {
    async run(data: unknown): Promise<unknown> {
      if (typeof data === 'string') {
        data = JSON.parse(data as string);
      }
      const params = data as CreateUserParams;
      return await createUser.create(params);
    },
  } as Action;
  app.addUseCase('createUser', action);
  return app;
};
