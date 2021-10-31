import { SecurityAccess } from 'src/adapters/interfaces/securityAccess';
import { Action } from 'src/adapters/interfaces/transport/action';

export interface MockServerAdapter {
  create: (
    actions: Map<string, Action>,
    configInstance: unknown,
    securityAccess: SecurityAccess
  ) => void;
  sendAction: (req: any) => Promise<unknown>
}