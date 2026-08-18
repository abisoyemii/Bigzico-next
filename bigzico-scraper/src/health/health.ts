export type HealthStatus = 'healthy' | 'unhealthy';

export interface IHealthCheck {
  name: string;
  check(): Promise<HealthStatus>;
}

export class HealthRegistry {
  private checks: IHealthCheck[] = [];

  public register(check: IHealthCheck): void {
    this.checks.push(check);
  }

  public async run(): Promise<Record<string, HealthStatus>> {
    const results: Record<string, HealthStatus> = {};
    await Promise.all(
      this.checks.map(async (check) => {
        results[check.name] = await check.check();
      }),
    );
    return results;
  }
}
