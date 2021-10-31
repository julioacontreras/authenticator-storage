export interface MockConnectorAdapter {
  connect: (config: unknown) => Promise<unknown>;
  close: () => void;
}
