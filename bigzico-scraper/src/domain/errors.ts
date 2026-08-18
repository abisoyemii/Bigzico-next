export class BaseError extends Error {
  public readonly code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ConfigurationError extends BaseError {
  constructor(message: string) {
    super('CONFIGURATION_ERROR', message);
  }
}

export class ValidationError extends BaseError {
  constructor(message: string) {
    super('VALIDATION_ERROR', message);
  }
}

export class DependencyInjectionError extends BaseError {
  constructor(message: string) {
    super('DEPENDENCY_INJECTION_ERROR', message);
  }
}

export class HealthCheckError extends BaseError {
  constructor(message: string) {
    super('HEALTH_CHECK_ERROR', message);
  }
}
