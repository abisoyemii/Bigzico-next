export type EventPayload = Record<string, unknown>;

export interface IEventBus {
  publish(eventName: string, payload: EventPayload): Promise<void>;
  subscribe(eventName: string, listener: (payload: EventPayload) => Promise<void>): void;
}

export class EventBus implements IEventBus {
  private listeners: Map<string, Array<(payload: EventPayload) => Promise<void>>> = new Map();

  public async publish(eventName: string, payload: EventPayload): Promise<void> {
    const handlers = this.listeners.get(eventName) ?? [];
    await Promise.all(handlers.map((fn) => fn(payload)));
  }

  public subscribe(eventName: string, listener: (payload: EventPayload) => Promise<void>): void {
    const handlers = this.listeners.get(eventName) ?? [];
    handlers.push(listener);
    this.listeners.set(eventName, handlers);
  }
}
