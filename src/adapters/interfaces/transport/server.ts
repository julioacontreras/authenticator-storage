import { Application } from 'src/application/application';
import {SecurityAccess} from '../../interfaces/securityAccess';
import {Action} from './action';

export interface ProtocolServerAdapter {
  create: (
    actions: Map<string, Action>,
    configInstance: unknown,
    securityAccess: SecurityAccess,
    app: Application
  ) => void;
}
