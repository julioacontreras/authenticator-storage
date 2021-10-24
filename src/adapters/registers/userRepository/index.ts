import {UserModel} from '../../../domain/user/entities/user';
import {User} from '../../../domain/user/valueObjects/user';
import {Application} from 'src/application/application';
import {MongoRepository} from '../../../infrastructure/mongodb/repository';

export const register = (app: Application): Application  =>{
  const UserRepository = new MongoRepository(User.single, UserModel, app.getDatabase())
  app.setUserRepository(UserRepository);
  return app
}
