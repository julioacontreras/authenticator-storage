import {UserType} from '../model/type';

export type DeleteUserParams = Pick<UserType, 'id'>;

export interface DeleteUserType {
  delete: (data: DeleteUserParams) => Promise<unknown>;
}
