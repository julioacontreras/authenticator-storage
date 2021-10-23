import {UserType} from '../entities/user';

export interface UpdateUser {
  add: (data: UserType) => Promise<void>;
}
