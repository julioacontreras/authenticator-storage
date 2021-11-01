export class MicroServiceError extends Error {
  private type: String;
  constructor(message: string, type: string) {
      super(message);
      this.type = type
      Object.setPrototypeOf(this, MicroServiceError.prototype);
  }
  getData() {
    return {
      message: this.message,
      type: this.type
    };
  }
}
