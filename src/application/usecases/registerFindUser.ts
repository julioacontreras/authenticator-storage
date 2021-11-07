import {Application} from '../application';
import {Action} from 'akuma-microservice-framework/lib/adapters/action-protocol/transport/action';
import {FindUser} from './user/findUser';
import {UserType} from '../../domain/user/entities/user';
import {MicroServiceError} from 'akuma-microservice-framework/lib/adapters/action-protocol/exception/microServiceError';

export const register = (app: Application): Application => {
  const findUser = new FindUser(app.getUserRepository());
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
      return await findUser.find(params.id);
    },
  } as Action;
  app.addUseCase('findUser', action);
  return app;
};
