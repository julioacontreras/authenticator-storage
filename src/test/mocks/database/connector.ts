const mongoose = require('mongoose');
import {ConnectorAdapter} from 'akuma-microservice-framework/lib/adapters/db/connector';
import {printStartService} from 'akuma-microservice-framework/lib/infrastructure/display';

const MockConnector = {
  connect: async (configInstance: unknown) => {
    printStartService('Mock database connected', '');
    return {};
  },
  close: async () => {
    console.info('closed!')
  },
} as ConnectorAdapter;

export {MockConnector};
