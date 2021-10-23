import {UserType} from '../entities/user';

export type CreateUserParams = Omit<UserType, 'id' | 'updatedAt' | 'createAt'>;

export interface CreateUserServiceType {
  create: (data: CreateUserParams, repository: unknown, auth: unknown) => void;
}
