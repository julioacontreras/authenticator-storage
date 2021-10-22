export interface Transformer {
  transformToData: (listData: Array<unknown>) => Array<unknown>;
  transformToAPI: (listAPI: Array<unknown>) => Array<unknown>;
}
