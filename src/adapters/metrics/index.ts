import {initializeMetrics} from 'akuma-metrics/lib/server';
import {MetricService} from 'akuma-metrics/lib/metric';
import {Application} from '../../application/application';

const config = {
  port: process.env.SERVER_METRICS_PORT,
};

export const register = async (app: Application): Promise<Application> => {
  const metric = new MetricService()
  initializeMetrics(config, metric);
  app.setMetric(metric);
  return app;
};
