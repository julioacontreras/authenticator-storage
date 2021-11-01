export interface FindUserType {
  find: (id: string) => Promise<unknown>;
}
