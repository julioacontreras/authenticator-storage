// Original file: proto/data.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AppRequestQueue as _appPackage_AppRequestQueue, AppRequestQueue__Output as _appPackage_AppRequestQueue__Output } from '../appPackage/AppRequestQueue';
import type { AppRequestService as _appPackage_AppRequestService, AppRequestService__Output as _appPackage_AppRequestService__Output } from '../appPackage/AppRequestService';
import type { AppResponseQueue as _appPackage_AppResponseQueue, AppResponseQueue__Output as _appPackage_AppResponseQueue__Output } from '../appPackage/AppResponseQueue';
import type { AppResponseService as _appPackage_AppResponseService, AppResponseService__Output as _appPackage_AppResponseService__Output } from '../appPackage/AppResponseService';

export interface AppServiceClient extends grpc.Client {
  sendToQueue(argument: _appPackage_AppRequestQueue, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseQueue__Output) => void): grpc.ClientUnaryCall;
  sendToQueue(argument: _appPackage_AppRequestQueue, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseQueue__Output) => void): grpc.ClientUnaryCall;
  sendToQueue(argument: _appPackage_AppRequestQueue, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseQueue__Output) => void): grpc.ClientUnaryCall;
  sendToQueue(argument: _appPackage_AppRequestQueue, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseQueue__Output) => void): grpc.ClientUnaryCall;
  sendToQueue(argument: _appPackage_AppRequestQueue, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseQueue__Output) => void): grpc.ClientUnaryCall;
  sendToQueue(argument: _appPackage_AppRequestQueue, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseQueue__Output) => void): grpc.ClientUnaryCall;
  sendToQueue(argument: _appPackage_AppRequestQueue, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseQueue__Output) => void): grpc.ClientUnaryCall;
  sendToQueue(argument: _appPackage_AppRequestQueue, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseQueue__Output) => void): grpc.ClientUnaryCall;
  
  sendToService(argument: _appPackage_AppRequestService, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseService__Output) => void): grpc.ClientUnaryCall;
  sendToService(argument: _appPackage_AppRequestService, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseService__Output) => void): grpc.ClientUnaryCall;
  sendToService(argument: _appPackage_AppRequestService, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseService__Output) => void): grpc.ClientUnaryCall;
  sendToService(argument: _appPackage_AppRequestService, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseService__Output) => void): grpc.ClientUnaryCall;
  sendToService(argument: _appPackage_AppRequestService, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseService__Output) => void): grpc.ClientUnaryCall;
  sendToService(argument: _appPackage_AppRequestService, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseService__Output) => void): grpc.ClientUnaryCall;
  sendToService(argument: _appPackage_AppRequestService, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseService__Output) => void): grpc.ClientUnaryCall;
  sendToService(argument: _appPackage_AppRequestService, callback: (error?: grpc.ServiceError, result?: _appPackage_AppResponseService__Output) => void): grpc.ClientUnaryCall;
  
}

export interface AppServiceHandlers extends grpc.UntypedServiceImplementation {
  sendToQueue: grpc.handleUnaryCall<_appPackage_AppRequestQueue__Output, _appPackage_AppResponseQueue>;
  
  sendToService: grpc.handleUnaryCall<_appPackage_AppRequestService__Output, _appPackage_AppResponseService>;
  
}

export interface AppServiceDefinition extends grpc.ServiceDefinition {
  sendToQueue: MethodDefinition<_appPackage_AppRequestQueue, _appPackage_AppResponseQueue, _appPackage_AppRequestQueue__Output, _appPackage_AppResponseQueue__Output>
  sendToService: MethodDefinition<_appPackage_AppRequestService, _appPackage_AppResponseService, _appPackage_AppRequestService__Output, _appPackage_AppResponseService__Output>
}
