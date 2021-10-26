const client = require('prom-client');
import {Metric} from '../../adapters/interfaces/metrics/metric';

// initialize
const register = new client.Registry();
register.setDefaultLabels({
  app: 'prometheus',
});
client.collectDefaultMetrics({register});

// singleton
export class MetricService implements Metric{
  widgets: Map<string, any> = new Map();
  metricsContentType: string = register.contentType;
  finishTime (start: number): number {
    return start - Number(new Date());
  }
  startTime(): number {
    return Number(new Date());
  }
  createGauge(slug: string, description: string) {
    this.widgets.set(slug, new client.Gauge({ name: slug, help: description }))
    this.widgets.get(slug).setToCurrentTime();
  }
  startGauge(slug: string): any {
    return this.widgets.get(slug).startTimer();
  }
  endGauge(end: any) {
    end()
  }
  async getMetrics () {
    return await register.metrics()
  }
}
