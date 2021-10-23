import {SecurityAccess} from '../../adapters/interfaces/securityAccess';
import dotenv from 'dotenv';
dotenv.config();

const accessTOken = process.env.TOKEN_ACCESS;

export const securityAccess = {
  checkAccess(token: string): boolean {
    return accessTOken === token;
  },
} as SecurityAccess;
