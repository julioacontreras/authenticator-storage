import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {ProtoGrpcType} from 'action-grpc/src/data';

import dotenv from 'dotenv';
dotenv.config();

// initiliaze variables
const PORT = process.env.SERVER_GRPC_PORT;
const PROTO_FILE = process.env.SERVER_GRPC_PROTO_FILE;
const HOST = process.env.SERVER_GRPC_HOST;
const packageDef = protoLoader.loadSync(PROTO_FILE);
const grpcObj = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;
const appPackage = grpcObj.appPackage;

const client = new appPackage.AppService(
  `${HOST}:${PORT}`,
  grpc.credentials.createInsecure()
);

export const sendToService = (request: any): boolean => {
  console.info(request)
  client.sendToService(request, (error, result) => {
    if (error) {
      console.error(error)
      return
    }
    console.info('Sended!', {result})
  })
  return true;
};

