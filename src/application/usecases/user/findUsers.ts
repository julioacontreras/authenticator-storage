import {RepositoryAdapter} from 'akuma-microservice-framework/lib/adapters/db/repository';
import {FindUsersType} from '../../../domain/user/services/findUsersInterface';

export class FindUsers implements FindUsersType {
  repository: RepositoryAdapter | null = null;
  constructor(repository: RepositoryAdapter) {
    this.repository = repository;
  }
  async find(): Promise<unknown> {
    return await this.repository.find({})  
  }
}
