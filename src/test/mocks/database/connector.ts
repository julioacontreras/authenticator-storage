const mongoose = require('mongoose');
import {ConnectorAdapter} from '../../../adapters/interfaces/db/connector';
import {printStartService} from '../../../infrastructure/display';

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
