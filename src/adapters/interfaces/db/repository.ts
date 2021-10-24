export interface RepositoryAdapter {
  transformer: unknown;
  setDB: (db: unknown) => void;
  createRepository: (table: string, schema: unknown) => {};
  createOne: (data: unknown) => Promise<unknown>;
  updateOne: (id: string, data: unknown) => Promise<unknown>;
  deleteOneById: (id: string) => Promise<unknown>;
  findOneById: (id: string) => Promise<unknown>;
  findOne: (data: unknown) => Promise<unknown>;
  find: (selector: unknown) => Promise<unknown>;
}
