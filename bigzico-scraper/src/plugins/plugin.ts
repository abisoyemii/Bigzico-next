import { IPlugin } from '../domain/interfaces';

export class PluginPlaceholder implements IPlugin {
  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  public async initialize(): Promise<void> {
    return;
  }
}
