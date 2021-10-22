import {RepositoryAdapter} from '../../../adapters/interfaces/db/repository';
import {AuthAdapter} from '../../../adapters/interfaces/auth';

import {
  CreateUserServiceType,
  CreateUserParams,
} from '../../../domain/user/services/createUser';

import {UserModel} from '../../../domain/user/model/index';

export class CreateUser implements CreateUserServiceType {
  repository: RepositoryAdapter | null = null;
  auth: AuthAdapter | null = null;

  constructor(repository: RepositoryAdapter, auth: AuthAdapter) {
    this.repository = repository;
    this.repository.createRepository('User', UserModel);
    this.auth = auth;
  }
  async create(data: CreateUserParams): Promise<unknown> {
    data.salt = this.auth.generateSalt();
    data.password = this.auth.hashPassword(data.password, data.salt);
    return await this.repository.createOne(data);
  }
}
