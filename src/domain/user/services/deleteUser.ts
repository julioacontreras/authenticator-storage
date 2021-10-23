import {UserType} from '../entities/user';

export type DeleteUserParams = Pick<UserType, 'id'>;

export interface DeleteUserType {
  delete: (data: DeleteUserParams) => Promise<unknown>;
}
