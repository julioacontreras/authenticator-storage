import {GRPCServer} from '../../../infrastructure/grpc/server';
import {Application} from '../../../application/application';

const config = {
  host: process.env.SERVER_GRPC_HOST,
  port: process.env.SERVER_GRPC_PORT,
  protoFile: process.env.SERVER_GRPC_PROTO_FILE,
};

export const register = (app: Application): Application => {
  app.startServer(GRPCServer, config);
  return app;
};
