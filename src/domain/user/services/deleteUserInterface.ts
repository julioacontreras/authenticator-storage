export interface DeleteUserType {
  delete: (id: string) => Promise<unknown>;
}
