import {UserType} from '../entities/user';

export type UpdateUserParams = Omit<UserType, 'id'>;
export interface UpdateUserType {
  update: (id: string, data: UpdateUserParams) => Promise<unknown>;
}
