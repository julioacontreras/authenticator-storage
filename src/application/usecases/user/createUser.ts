import {RepositoryAdapter} from '../../../adapters/interfaces/db/repository';
import {
  CreateUserServiceType,
  CreateUserParams,
} from '../../../domain/user/services/createUser';
import {ValidateParamsCreateUser} from '../../validations/validateParamsCreateUser';
import {UserModel} from '../../../domain/user/entities/user';
import { Validator } from 'src/adapters/interfaces/validator';

export class CreateUser implements CreateUserServiceType {
  private repository: RepositoryAdapter | null = null;
  private validateParamsCreateUser: ValidateParamsCreateUser | null = null;

  constructor(repository: RepositoryAdapter, validator: Validator) {
    this.validateParamsCreateUser = new ValidateParamsCreateUser(validator)
    this.repository = repository;
    this.repository.createRepository('User', UserModel);
  }
  async create(data: CreateUserParams): Promise<unknown> {
    this.validateParamsCreateUser.validate(data)
    return await this.repository.createOne(data);
  }
}
