import {RepositoryAdapter} from '../../../adapters/interfaces/db/repository';

import {
  DeleteUserType,
  DeleteUserParams,
} from '../../../domain/user/services/deleteUserInterface';

export class DeleteUser implements DeleteUserType {
  repository: RepositoryAdapter | null = null;
  constructor(repository: RepositoryAdapter) {
    this.repository = repository;
  }
  async delete(data: DeleteUserParams): Promise<unknown> {
    return await this.repository.deleteOneById(data.id);
  }
}
