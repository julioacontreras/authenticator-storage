import {Metric} from '../../adapters/interfaces/metrics/metric';

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
    return start - Number(new Date());
  }

  createCounterRequestTotalOperators() {
    const counter = new client.Counter({
      name: 'node_request_operations_total',
      help: 'The total number of processed requests'
    });
    this.widgets.set('total_requests', counter);
  }

  createHistogramRequestDuration() {
    console.log('createHistogramRequestDuration!')
    const histogram = new client.Histogram({
      name: 'http_request_duration_ms',
      help: 'Histogram for the duration in seconds.',
      labelNames: ['route'],
      buckets: [-1, -0.001, 0, 0.1, 0.5, 0.7, 1, 5, 10]
    });
    this.widgets.set('histogram_duration', histogram);  
  }

  calculeHistogramRequestDuration(start: number, path: string) {
    console.log('calculeHistogramRequestDuration!')
    const end = this.finishTime(start)
    const histogram = this.widgets.get('histogram_duration')
    const result = (end / 1000)
    histogram
      .labels(path)
      .observe(result)
  }

  sumOneRequest() {
    const counter =  this.widgets.get('total_requests');
    counter.inc();
  }

  async getMetrics () {
    return await client.register.metrics()
  }
}
