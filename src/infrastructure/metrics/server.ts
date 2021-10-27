import express from 'express';
import {printStartService} from '../display';
import {Metric} from '../../adapters/interfaces/metrics/metric';

export interface Config {
  port: string;
}

export const initializeMetrics = (
  config: Config,
  metric: Metric
) => {
  connect(config, metric);
};

const connect = (
  config: Config,
  metric: Metric
) => {
  const server = startServer(metric);
  server.listen(config.port, () => {
    printStartService('Server metrics on port', String(config.port));
  });
};

function startServer(metric: Metric) {
  const server = express();
  const cors = require('cors');
  const bodyParser = require('body-parser');
  server.use(cors()); // Enable to crosssites
  server.use(bodyParser.urlencoded({extended: false}));
  server.use(bodyParser.json());
  server.all('/metrics', async (req, res) => {
    res.set('Content-Type', metric.metricsContentType);
    res.end(await metric.getMetrics());    
  });
  return server;
}
