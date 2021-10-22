import {Application} from '../application';
import {Action} from '../../adapters/interfaces/protocol/action';
import {CreateUser} from './user/createUser';
import {CreateUserParams} from '../../domain/user/services/createUser';

export const register = (app: Application): Application => {
  const createUser = new CreateUser(app.getRepository(), app.getAuth());
  const action = {
    async run(data: unknown): Promise<unknown> {
      if (typeof data === 'string') {
        data = JSON.parse(data as string);
      }
      const jsonData = data;
      return await createUser.create(jsonData as CreateUserParams);
    },
  } as Action;
  app.addUseCase('createUser', action);
  return app;
};
