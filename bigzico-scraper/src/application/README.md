# Application Layer

The Application layer orchestrates use cases. It coordinates domain rules and infrastructure adapters without owning implementation details.

Responsibilities:
- Orchestrate scrape, import, validation, and image publication workflows.
- Keep use-case orchestration decoupled from low-level infrastructure concerns.
- Apply event publication and coordination patterns.

This layer is a stable use-case boundary for later phases.
