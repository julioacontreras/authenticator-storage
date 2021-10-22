import {UserType} from '../model/type';

export type CreateUserParams = Omit<UserType, 'id' | 'updatedAt' | 'createAt'>;

export interface CreateUserServiceType {
  create: (data: CreateUserParams, repository: unknown, auth: unknown) => void;
}
