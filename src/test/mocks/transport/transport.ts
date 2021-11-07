import { SecurityAccess } from 'akuma-microservice-framework/lib/adapters/action-protocol/security-access';
import { Action } from 'akuma-microservice-framework/lib/adapters/action-protocol/transport/action';
import {ProtocolServerAdapter} from  'akuma-microservice-framework/lib/adapters/action-protocol/transport/server'

let actions:  Map<string, Action>;
let securityAccess: SecurityAccess | null = null;

interface reqType {
  action: String,
  token: String,
  data: string
}

interface reSType {
  status?: String,
  message?: String,
  data: String
}

export const MockServer = {
  create: (
    actionsInstance: Map<string, Action>,
    config: unknown,
    securityAccessInstance: SecurityAccess
  ) => {
    actions = actionsInstance;
    securityAccess = securityAccessInstance;
    return this
  },
  sendAction: async (req: any) => {
    return new Promise(async (resolve, reject) => {
      let action: Action | null = null;
      try {
        action = actions.get(req.action);
      }
      catch (err) {
        reject({message: err});
      }
      if (!action) {
        reject({message: 'Not found action'});
      }
      if (!securityAccess.checkAccess(req.token)) {
        reject({message: 'Token not allowed'});
      }
      let dataResponse;
      try {
        dataResponse = await action.run(req.data);
        resolve({data: JSON.stringify(dataResponse)})  
      } catch (err) {
        reject({message: err});
      }
    })
  }
} as ProtocolServerAdapter;
