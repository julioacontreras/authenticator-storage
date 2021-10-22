export interface ConnectorAdapter {
  connect: (config: unknown) => Promise<unknown>;
  close: () => void;
}
