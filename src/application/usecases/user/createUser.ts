import {RepositoryAdapter} from '../../../adapters/interfaces/db/repository';
import {
  CreateUserServiceType,
  CreateUserParams,
} from '../../../domain/user/services/createUserInterface';
import {ValidateParamsCreateUser} from './validations/validateParamsCreateUser';
import {Validator} from '../../../adapters/interfaces/validator';
import {MicroServiceError} from '../../../adapters/core/microServiceError';

export class CreateUser implements CreateUserServiceType {
  private repository: RepositoryAdapter | null = null;
  private validateParamsCreateUser: ValidateParamsCreateUser | null = null;

  constructor(repository: RepositoryAdapter, validator: Validator) {
    this.validateParamsCreateUser = new ValidateParamsCreateUser(validator)
    this.repository = repository;
  }

  async create(data: CreateUserParams): Promise<unknown> {
    this.validateParamsCreateUser.validate(data);
    if (await this.existEmail(data.email)) {
      throw new MicroServiceError('This email is already created. Please select another email.', 'email-error') 
    }
    if (await this.existUsername(data.username)) {
      throw new MicroServiceError('This username is already created. Please select another username.', 'email-error')
    }
    return await this.repository.createOne(data);
  }

  async existEmail(email: string): Promise<boolean>{
    return await this.repository.findOne({email}) ? true : false
  }

  async existUsername(username: string): Promise<boolean>{
    return await this.repository.findOne({username}) ? true : false
  }
}
