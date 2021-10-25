import {UserModel} from '../../../domain/user/entities/user';
import {User} from '../../../domain/user/valueObjects/user';
import {Application} from 'src/application/application';

export const register = (app: Application): Application  =>{
  const UserRepository = new app.Repository(User.single, UserModel, app.getDatabase())
  app.setUserRepository(UserRepository);
  return app
}
