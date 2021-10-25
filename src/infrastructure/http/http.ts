import express from 'express';
import {printStartService} from '../display';
import {Config} from './config';
import {Action} from '../../adapters/interfaces/transport/action';
import {SecurityAccess} from '../../adapters/interfaces/securityAccess';

export const initializeHTTP = (
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
  const server = startServer(actions, securityAccess);
  server.listen(config.port, () => {
    printStartService('Server HTTP on port', String(config.port));
  });
};

function startServer(
  actions: Map<string, Action>,
  securityAccess: SecurityAccess
) {
  const server = express();
  const cors = require('cors');
  const bodyParser = require('body-parser');
  server.use(cors()); // Enable to crosssites
  server.use(bodyParser.urlencoded({extended: false}));
  server.use(bodyParser.json());
  server.post('/service', async (req, res) => {
    let action: Action | null = null;
    try {
      action = actions.get(req.body.action);
    }
    catch (err) {
      res.status(500).json({message: err});
      return;
    }
    if (!action) {
      res.status(500).json({message: 'Not found action'});
      return;
    }
    if (!securityAccess.checkAccess(req.body.token)) {
      res.status(500).json({message: 'Token not allowed'});
      return;
    }
    let dataResponse;
    try {
      dataResponse = await action.run(req.body.data);
      res.json({data: JSON.stringify(dataResponse)});  
    } catch (err) {
      res.status(500).json({message: err});
    }
  });
  return server;
}
