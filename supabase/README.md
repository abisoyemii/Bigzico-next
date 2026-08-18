# Supabase schema notes

This folder contains the review-only database setup for the BIGZICO scraper pipeline.

## Why this table exists

The public products table is the canonical storage location for catalog entries discovered by external scraping sources such as Fouani. It keeps the scraper output in a single place and allows the app to retrieve product listings without tightly coupling source-specific fields to the frontend.

## Source-based deduplication

The scraper will store each product using a source identifier and a source-specific product identifier. The combination of source + source_id is treated as the deduplication key so the same product from different vendors or feeds can coexist without collisions.

The unique index on (source, source_id) prevents duplicate rows from the same source feed while still allowing the same product name to exist across different sources.

## Major fields

- id: PostgreSQL UUID primary key for internal product identity.
- name: product display name.
- slug: URL-safe slug for routing and uniqueness.
- description / short_description: textual product details.
- price / compare_at_price: price metadata in numeric columns.
- stock: availability count.
- sku / brand / category_id: catalog metadata.
- images / thumbnail: structured image payloads and primary image.
- is_featured / is_active: catalog visibility and promotion flags.
- tags / dimensions: flexible JSONB payloads that preserve scraper metadata without forcing a rigid schema.
- source / source_id / source_url: scraper provenance information.
- scraped_at: timestamp for the latest import event.
- created_at / updated_at: row lifecycle timestamps.

## Scraper upsert behavior

The scraper will look up products by source + source_id before inserting or updating. When a product already exists, the scraper should refresh its content and then update updated_at automatically.

This design avoids duplicate records from the same feed while allowing the app to treat products as a normalized catalog table.

## Review requirement

This migration must be reviewed before execution. It is intentionally safe for an empty database, but it should only be applied after confirming the environment and table strategy.
