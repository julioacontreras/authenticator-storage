import {Application} from '../application';
import {Action} from '../../adapters/interfaces/transport/action';
import {UpdateUser} from './user/updateUser';
import {UpdateUserParams} from '../../domain/user/services/updateUserInterface';
import {UserType} from '../../domain/user/entities/user';
import {MicroServiceError} from '../../adapters/core/microServiceError';

export const register = (app: Application): Application => {
  const updateUser = new UpdateUser(app.getUserRepository());
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
      return await updateUser.update(params.id, data as UpdateUserParams);
    },
  } as Action;
  app.addUseCase('updateUser', action);
  return app;
};
