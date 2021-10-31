import {UserType} from '../entities/user';

export interface UpdateUser {
  find: (data: UserType) => Promise<void>;
}
