# Infrastructure Layer

The Infrastructure layer contains the concrete implementations for storage, queueing, network, external systems, and runtime adapters.

Responsibilities:
- Provide technical implementations for the contracts defined in Core and Domain.
- Wrap external systems such as Redis, Prisma, Cloudinary, and browser runtimes.
- Keep infrastructure concerns outside the business model.

This layer is intentionally replaceable and has the highest change rate.
