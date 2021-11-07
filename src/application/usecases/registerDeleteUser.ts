import {Application} from '../application';
import {Action} from 'akuma-microservice-framework/lib/adapters/action-protocol/transport/action';
import {DeleteUser} from './user/deleteUser';
import {MicroServiceError} from 'akuma-microservice-framework/lib/adapters/action-protocol/exception/microServiceError';
import { UserType } from '../../domain/user/entities/user';

export const register = (app: Application): Application => {
  const deleteUser = new DeleteUser(app.getUserRepository());
  const action = {
    async run(data: unknown): Promise<unknown> {
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data as string);
        } catch (err) {
          console.error(err)
          throw new MicroServiceError('Error parsing data grpc', 'error-grpc')
        }
      }
      const params = data as UserType
      return await deleteUser.delete(params.id);
    },
  } as Action;
  app.addUseCase('deleteUser', action);
  return app;
};
