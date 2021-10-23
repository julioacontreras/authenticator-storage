import {SecurityAccess} from '../../interfaces/securityAccess';
import {Action} from './action';

export interface ProtocolServerAdapter {
  create: (
    actions: Map<string, Action>,
    configInstance: unknown,
    securityAccess: SecurityAccess
  ) => void;
}
