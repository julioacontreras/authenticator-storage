import express from 'express';
import {printStartService} from '../display';
import {Config} from './config';
import {Action} from '../../adapters/interfaces/transport/action';
import {SecurityAccess} from '../../adapters/interfaces/securityAccess';
import {Application} from 'src/application/application';

export const initializeHTTP = (
  config: Config,
  actions: Map<string, Action>,
  securityAccess: SecurityAccess,
  app: Application
  ) => {
  connect(config, actions, securityAccess, app);
};

const connect = (
  config: Config,
  actions: Map<string, Action>,
  securityAccess: SecurityAccess,
  app: Application
) => {
  const server = startServer(actions, securityAccess, app);
  server.listen(config.port, () => {
    printStartService('Server HTTP on port', String(config.port));
  });
};

function startServer(
  actions: Map<string, Action>,
  securityAccess: SecurityAccess,
  app: Application
) {
  const server = express();
  const cors = require('cors');
  const bodyParser = require('body-parser');
  server.use(cors()); // Enable to crosssites
  server.use(bodyParser.urlencoded({extended: false}));
  server.use(bodyParser.json());

  const metric = app.getMetric()
  metric.createCounterRequestTotalOperators();
  metric.createHistogramRequestDuration();

  const path = '/service'
  server.post(path, async (req, res) => {
    const start = metric.startTime();
    let action: Action | null = null;
    const actionName = req.body.action
    metric.sumOneRequest(actionName);
    try {
      action = actions.get(actionName);
    }
    catch (err) {
      metric.calculeHistogramRequestDuration(start, actionName)
      res.status(500).json({message: err});
      return;
    }
    if (!action) {
      metric.calculeHistogramRequestDuration(start, actionName)
      res.status(500).json({message: 'Not found action'});
      return;
    }
    if (!securityAccess.checkAccess(req.body.token)) {
      metric.calculeHistogramRequestDuration(start, actionName)
      res.status(500).json({message: 'Token not allowed'});
      return;
    }
    let dataResponse;
    try {
      dataResponse = await action.run(req.body.data);
      metric.calculeHistogramRequestDuration(start, actionName)
      res.json({data: JSON.stringify(dataResponse)});  
    } catch (err) {
      metric.calculeHistogramRequestDuration(start, actionName)
      res.status(500).json({message: err});
    }
  });
  return server;
}
