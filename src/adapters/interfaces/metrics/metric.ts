export interface Metric {
  metricsContentType: string;
  finishTime: (start: number) => number;
  startTime: () => number;
  getMetrics: () => Promise<unknown>;
  createGauge: (slug: string, description: string) => void;
  startGauge: (slug: string) => any;
  endGauge: (end: any) => void;
  createHistogram: (
    slug: string,
    description: string,
    labels: Array<string>,
    buckets: Array<number>
  ) => void;
  histogramObserver: (slug: string, value: number) => void;
}
