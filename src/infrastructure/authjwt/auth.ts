import {AuthAdapter} from '../../adapters/interfaces/auth';

export class AuthJWT implements AuthAdapter {
  login() {
    return true;
  }

  logout() {
    return true;
  }

  hashPassword(passwordPlain: string): string {
    return passwordPlain;
  }

  checkPassword(passwordPlain: string, hash: string): boolean {
    return this.hashPassword(passwordPlain) === hash;
  }

  generateSalt(): string {
    return 'mySalt';
  }
}
