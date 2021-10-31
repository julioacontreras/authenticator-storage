import {UserType} from '../entities/user';

export interface UpdateUser {
  update: (data: UserType) => Promise<void>;
}
