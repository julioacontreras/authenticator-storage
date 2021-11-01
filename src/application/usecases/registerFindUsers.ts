import {Application} from '../application';
import {Action} from '../../adapters/interfaces/transport/action';
import {FindUsers} from './user/findUsers';

export const register = (app: Application): Application => {
  const findUsers = new FindUsers(app.getUserRepository());
  const action = {
    async run(_: unknown): Promise<unknown> {
      return await findUsers.find();
    },
  } as Action;
  app.addUseCase('findUsers', action);
  return app;
};
