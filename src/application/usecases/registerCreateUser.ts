import {Application} from '../application';
import {Action} from 'akuma-microservice-framework/lib/adapters/action-protocol/transport/action';
import {CreateUser} from './user/createUser';
import {CreateUserParams} from '../../domain/user/services/createUserInterface';
import {MicroServiceError} from 'akuma-microservice-framework/lib/adapters/action-protocol/exception/microServiceError';

export const register = (app: Application): Application => {
  const createUser = new CreateUser(app.getUserRepository(), app.getValidator());
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
      return await createUser.create(data as CreateUserParams);
    },
  } as Action;
  app.addUseCase('createUser', action);
  return app;
};
