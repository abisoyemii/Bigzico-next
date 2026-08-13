import { IQueue } from '../domain/interfaces';

export class QueuePlaceholder implements IQueue {
  async enqueue(jobName: string, payload: unknown): Promise<string> {
    return `placeholder-${jobName}`;
  }

  process(jobName: string, handler: (payload: unknown) => Promise<void>): void {
    // Placeholder queue does not execute jobs yet.
  }
}
