import {RepositoryAdapter} from '../../../adapters/interfaces/db/repository';

import {
  UpdateUserType,
  UpdateUserParams,
} from '../../../domain/user/services/updateUserInterface';

export class UpdateUser implements UpdateUserType {
  repository: RepositoryAdapter | null = null;
  constructor(repository: RepositoryAdapter) {
    this.repository = repository;
  }
  async update(id: string, data: UpdateUserParams): Promise<unknown> {
    return await this.repository.updateOne(id, data);
  }
}
