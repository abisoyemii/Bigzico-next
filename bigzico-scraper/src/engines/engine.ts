import { IEngine } from '../domain/interfaces';

export class EnginePlaceholder implements IEngine {
  async execute<T>(action: () => Promise<T>): Promise<T> {
    return action();
  }
}
