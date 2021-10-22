import dotenv from 'dotenv';
dotenv.config();

import {Action} from '../../adapters/interfaces/protocol/action';
import {ProtocolServerAdapter} from '../../adapters/interfaces/protocol/server';
import {initializeGRPC} from './grpc';
import {Config} from './config';

export const GRPCServer = {
  create: (actions: Map<string, Action>, configInstance: unknown) => {
    const config = configInstance as Config;
    initializeGRPC(config, actions);
  },
} as ProtocolServerAdapter;
