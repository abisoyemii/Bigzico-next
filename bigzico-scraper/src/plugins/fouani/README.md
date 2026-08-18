# Fouani Plugin

This plugin is responsible for collecting products from the Fouani Official Store.

## Responsibilities

- Discover product listing endpoints
- Fetch product JSON
- Parse product data
- Normalize products into the BigZico format
- Export products for import into the BigZico catalog

## Modules

- discovery.ts
- scraper.ts
- parser.ts
- normalizer.ts

No business logic should exist inside this README.