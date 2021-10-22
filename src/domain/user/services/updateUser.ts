import {UserType} from '../model/type';

export interface UpdateUser {
  add: (data: UserType) => Promise<void>;
}
