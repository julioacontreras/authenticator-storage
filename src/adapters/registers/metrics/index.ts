import {initializeMetrics} from '../../../infrastructure/metrics/server';
import {MetricService} from '../../../infrastructure/metrics/metric';
import {Application} from '../../../application/application';
import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.SERVER_METRICS_PORT,
};

export const register = async (app: Application): Promise<Application> => {
  const metric = new MetricService()
  initializeMetrics(config, metric);
  app.setMetric(metric);
  return app;
};
