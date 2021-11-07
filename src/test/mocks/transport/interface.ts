import { SecurityAccess } from 'akuma-microservice-framework/lib/adapters/action-protocol/security-access';
import { Action } from 'akuma-microservice-framework/lib/adapters/action-protocol/transport/action';

export interface MockServerAdapter {
  create: (
    actions: Map<string, Action>,
    configInstance: unknown,
    securityAccess: SecurityAccess
  ) => void;
  sendAction: (req: any) => Promise<unknown>
}