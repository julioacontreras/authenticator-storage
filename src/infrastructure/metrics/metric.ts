import {Metric} from '../../adapters/interfaces/metrics/metric';

const client = require('prom-client');

export class MetricService implements Metric{
  private register: any;
  widgets: Map<string, any> = new Map();
  metricsContentType: string;

  constructor() {
    console.log('Metrics services created!')
    this.register = new client.Registry();
    this.metricsContentType = this.register.contentType;
    this.register.setDefaultLabels({
      app: 'prometheus',
    });
    client.collectDefaultMetrics({register: this.register});    
  }

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

  createHistogram(
    slug: string,
    description: string,
    labels: Array<string>,
    buckets: Array<number>
  ){
    const histogram = new client.Histogram({
      name: slug,
      help: description,
      labelNames: labels,
      buckets
    })    
    this.widgets.set(slug, histogram);
  }

  histogramObserver(slug: string, value: number) {
    this.widgets.get(slug).observe(value);
  }

  async getMetrics () {
    return await this.register.metrics()
  }
}
