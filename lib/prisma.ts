type PrismaClientLike = any;

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClientLike };

const createPrismaStub = () =>
  new Proxy(
    {},
    {
      get: (_target, prop) => {
        if (prop === 'then') return undefined;
        return new Proxy(() => {}, {
          apply: () => Promise.reject(new Error(`Prisma client is not configured for ${String(prop)}.`)),
          get: () => new Proxy(() => {}, {
            apply: () => Promise.reject(new Error(`Prisma client is not configured for ${String(prop)}.`)),
          }),
        });
      },
    }
  );

export const prisma: PrismaClientLike = globalForPrisma.prisma ?? createPrismaStub();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
