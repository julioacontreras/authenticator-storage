export interface Action {
  run: (data: unknown) => Promise<unknown>;
}
