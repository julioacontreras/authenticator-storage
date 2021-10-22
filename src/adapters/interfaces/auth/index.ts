export interface AuthAdapter {
  login: () => unknown;
  logout: () => unknown;
  generateSalt: () => string;
  hashPassword: (passwordPlain: string, salt: string) => string;
  checkPassword: (asswordPlain: string, hash: string) => boolean;
}
