export interface SecurityAccess {
  checkAccess: (token: string) => boolean;
}
