import {RepositoryAdapter} from 'akuma-microservice-framework/lib/adapters/db/repository';
import {FindUserType} from '../../../domain/user/services/findUserInterface';

export class FindUser implements FindUserType {
  repository: RepositoryAdapter | null = null;
  constructor(repository: RepositoryAdapter) {
    this.repository = repository;
  }
  async find(id: string): Promise<unknown> {
    return await this.repository.findOneById(id);
  }
}
