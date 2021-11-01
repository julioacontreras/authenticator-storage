export interface Metric {
  metricsContentType: string;
  getMetrics: () => Promise<unknown>;
  finishTime?: (start: number) => number;
  startTime?: () => number;
  createGauge?: (slug: string, description: string) => void;
  startGauge?: (slug: string) => any;
  endGauge?: (end: any) => void;
  createHistogram?: (
    slug: string,
    description: string,
    labels: Array<string>,
    buckets: Array<number>
  ) => void;
  histogramObserver?: (slug: string, value: number) => void;
  createCounterRequestTotalOperators?: () => void;
  createHistogramRequestDuration?: () => void;
  calculeHistogramRequestDuration?: (start: number, action: string) => void;
  sumOneRequest?: (action: string) => void;
}
