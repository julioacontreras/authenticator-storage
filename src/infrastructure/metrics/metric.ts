import {Metric} from 'akuma-microservice-framework/lib/adapters/action-protocol/metrics/metric';

const client = require('prom-client');

export class MetricService implements Metric{
  widgets: Map<string, any> = new Map();
  metricsContentType: string;

  constructor() {
    console.log('Metrics services created!')   
    this.metricsContentType = client.register.contentType;
    client.collectDefaultMetrics({
      timeout: 5000
    });    
  }

  startTime(): number {
    return Number(new Date());
  }

  finishTime (start: number): number {
    return Number(new Date()) - start;
  }

  createCounterRequestTotalOperators() {
    const counter = new client.Counter({
      name: 'node_request_operations_total',
      help: 'The total number of processed requests',
      labelNames: ['action'],
    });
    this.widgets.set('total_requests', counter);
  }

  createHistogramRequestDuration() {
    const histogram = new client.Histogram({
      name: 'http_request_duration_ms',
      help: 'Histogram for the duration in seconds.',
      labelNames: ['action'],
      buckets: [0, 0.001, 0.010, 0.5, 1, 5, 10]
    });
    this.widgets.set('histogram_duration', histogram);  
  }

  calculeHistogramRequestDuration(start: number, action: string) {
    const end = this.finishTime(start)
    const histogram = this.widgets.get('histogram_duration')
    const durationInMs = (end / 1000)
    histogram.observe({action}, durationInMs)
  }

  sumOneRequest(action: string) {
    const counter =  this.widgets.get('total_requests');
    counter.inc({action});
  }

  async getMetrics () {
    return await client.register.metrics()
  }
}
