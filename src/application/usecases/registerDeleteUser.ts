import {Application} from '../application';
import {Action} from '../../adapters/interfaces/transport/action';
import {DeleteUser} from './user/deleteUser';
import {DeleteUserParams} from '../../domain/user/services/deleteUser';

export const register = (app: Application): Application => {
  const createUser = new DeleteUser(app.getUserRepository());
  const action = {
    async run(data: unknown): Promise<unknown> {
      const jsonData = JSON.parse(data as string);
      return await createUser.delete(jsonData as DeleteUserParams);
    },
  } as Action;
  app.addUseCase('deleteUser', action);
  return app;
};
