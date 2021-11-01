import dotenv from 'dotenv';
dotenv.config();

import {Action} from '../../adapters/interfaces/transport/action';
import {SecurityAccess} from '../../adapters/interfaces/securityAccess';
import {ProtocolServerAdapter} from '../../adapters/interfaces/transport/server';
import {initializeGRPC} from './grpc';
import {Config} from './config';
import { Application } from 'src/application/application';

export const GRPCServer = {
  create: (
    actions: Map<string, Action>,
    configInstance: unknown,
    securityAccess: SecurityAccess,
    app: Application
  ) => {
    const config = configInstance as Config;
    initializeGRPC(config, actions, securityAccess, app);
  },
} as ProtocolServerAdapter;
