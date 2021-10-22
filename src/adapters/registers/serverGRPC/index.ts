import {GRPCServer} from '../../../infrastructure/grpc/server';
import {Application} from '../../../application/application';

const config = {
  host: process.env.GRPC_HOST,
  port: process.env.GRPC_PORT,
  protoFile: process.env.GRPC_PROTO_FILE,
};

export const register = (app: Application): Application => {
  app.startServer(GRPCServer, config);
  return app;
};
