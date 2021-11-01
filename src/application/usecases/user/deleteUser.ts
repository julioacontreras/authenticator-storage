import {RepositoryAdapter} from '../../../adapters/interfaces/db/repository';

import { DeleteUserType } from '../../../domain/user/services/deleteUserInterface';

export class DeleteUser implements DeleteUserType {
  repository: RepositoryAdapter | null = null;
  constructor(repository: RepositoryAdapter) {
    this.repository = repository;
  }
  async delete(id: string): Promise<unknown> {
    return await this.repository.deleteOneById(id);
  }
}
