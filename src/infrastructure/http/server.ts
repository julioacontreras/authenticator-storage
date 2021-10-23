import dotenv from 'dotenv';
dotenv.config();

import {Action} from '../../adapters/interfaces/transport/action';
import {SecurityAccess} from '../../adapters/interfaces/securityAccess';
import {ProtocolServerAdapter} from '../../adapters/interfaces/transport/server';
import {initializeHTTP} from './http';
import {Config} from './config';

export const HTTPServer = {
  create: (
    actions: Map<string, Action>,
    configInstance: unknown,
    securityAccess: SecurityAccess
  ) => {
    const config = configInstance as Config;
    initializeHTTP(config, actions, securityAccess);
  },
} as ProtocolServerAdapter;
