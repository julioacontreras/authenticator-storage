import dotenv from 'dotenv';
dotenv.config();

import {Action} from '../../adapters/interfaces/transport/action';
import {SecurityAccess} from '../../adapters/interfaces/securityAccess';
import {ProtocolServerAdapter} from '../../adapters/interfaces/transport/server';
import {initializeGRPC} from './grpc';
import {Config} from './config';

export const GRPCServer = {
  create: (
    actions: Map<string, Action>,
    configInstance: unknown,
    securityAccess: SecurityAccess
  ) => {
    const config = configInstance as Config;
    initializeGRPC(config, actions, securityAccess);
  },
} as ProtocolServerAdapter;
