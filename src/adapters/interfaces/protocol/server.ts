import {Action} from './action';

export interface ProtocolServerAdapter {
  create: (actions: Map<string, Action>, configInstance: unknown) => void;
}
