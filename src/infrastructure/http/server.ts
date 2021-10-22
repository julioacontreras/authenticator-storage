import dotenv from 'dotenv';
dotenv.config();

import {Action} from '../../adapters/interfaces/protocol/action';
import {ProtocolServerAdapter} from '../../adapters/interfaces/protocol/server';
import {initializeHTTP} from './http';
import {Config} from './config';

export const HTTPServer = {
  create: (actions: Map<string, Action>, configInstance: unknown) => {
    const config = configInstance as Config;
    initializeHTTP(config, actions);
  },
} as ProtocolServerAdapter;
