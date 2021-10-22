import express from 'express';
import {printStartService} from '../display';
import {Config} from './config';
import {Action} from '../../adapters/interfaces/protocol/action';

export const initializeHTTP = (
  config: Config,
  actions: Map<string, Action>
) => {
  connect(config, actions);
};

const connect = (config: Config, actions: Map<string, Action>) => {
  express;
  const server = startServer(actions);
  server.listen(config.port, () => {
    printStartService('Server HTTP on port', String(config.port));
  });
};

function startServer(actions: Map<string, Action>) {
  const server = express();
  const cors = require('cors');
  const bodyParser = require('body-parser');
  server.use(cors()); // Enable to crosssites
  server.use(bodyParser.urlencoded({extended: false}));
  server.use(bodyParser.json());
  server.post('/service', (req, res) => {
    const action = actions.get(req.body.action);
    if (!action) {
      throw 'Not found action';
    }
    const dataResponse = action.run(req.body.data);
    res.json({data: JSON.stringify(dataResponse)});
  });
  return server;
}
