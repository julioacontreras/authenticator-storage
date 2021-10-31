import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {SecurityAccess} from '../../adapters/interfaces/securityAccess';
// eslint-disable-next-line node/no-unpublished-import
import {ProtoGrpcType} from '../../../../grpc/src/data';
// eslint-disable-next-line node/no-unpublished-import
import {AppServiceHandlers} from '../../../../grpc/src/appPackage/AppService';
import {printStartService} from '../display';
import {Config} from './config';
import {Action} from '../../adapters/interfaces/transport/action';
import {MicroServiceError} from 'src/adapters/core/microServiceError';

export const initializeGRPC = (
  config: Config,
  actions: Map<string, Action>,
  securityAccess: SecurityAccess
) => {
  connect(config, actions, securityAccess);
};

const connect = (
  config: Config,
  actions: Map<string, Action>,
  securityAccess: SecurityAccess
) => {
  const server = startServer(config, actions, securityAccess);
  server.bindAsync(
    `${config.host}:${config.port}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error(err);
        return;
      }
      printStartService('Server gRPC on port', String(port));
      server.start();
    }
  );
};

function startServer(
  config: Config,
  actions: Map<string, Action>,
  securityAccess: SecurityAccess
) {
  const packageDef = protoLoader.loadSync(config.protoFile);
  const grpcObj = grpc.loadPackageDefinition(
    packageDef
  ) as unknown as ProtoGrpcType;
  const appPackage = grpcObj.appPackage;
  const server = new grpc.Server();
  server.addService(appPackage.AppService.service, {
    sendToService: (req, res) => {
      const action = actions.get(req.request.action);
      if (!action) {
        res(null, {data: JSON.stringify({
          error: 'grpc',
          message: 'Not found action'
        })});
        return
      }

      if (!securityAccess.checkAccess(req.request.token)) {
        res(null, {data: JSON.stringify({
          error: 'grpc',
          message: 'Token not allowed'
        })});
        return
      }

      try {
        const dataResponse = action.run(req.request.data);
        res(null, {data: JSON.stringify(dataResponse)});  
      } catch (error) {
        error = error as MicroServiceError 
        res(null, {data: JSON.stringify(error.getData())});  
      }
    },
  } as AppServiceHandlers);
  return server;
}
