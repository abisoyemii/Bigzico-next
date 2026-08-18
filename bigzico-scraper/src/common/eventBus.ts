import { EventBus, IEventBus } from '../domain/events';

export const eventBus: IEventBus = new EventBus();
