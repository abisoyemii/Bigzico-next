# Core Layer

The Core layer contains the canonical contracts, domain models, and platform-wide invariants that all other layers depend on.

Responsibilities:
- Define the public architecture contracts for all bounded contexts.
- Contain the business-level vocabulary and invariants.
- Avoid any implementation dependencies on queues, scrapers, UI, or DB infrastructure.

This layer is intentional and intentionally small so it remains stable across years of product evolution.
