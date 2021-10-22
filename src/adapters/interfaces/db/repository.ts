export interface RepositoryAdapter {
  transformer: unknown;
  setDB: (db: unknown) => void;
  createRepository: (table: string, schema: unknown) => {};
  createOne: (data: unknown) => Promise<unknown>;
  updateOne: (id: string, data: unknown) => Promise<unknown>;
  deleteOne: (id: string) => Promise<unknown>;
  findOne: (id: string) => Promise<unknown>;
  find: (selector: unknown) => Promise<unknown>;
}
