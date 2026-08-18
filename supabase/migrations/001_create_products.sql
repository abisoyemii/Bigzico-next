CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.products (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    slug text NOT NULL UNIQUE,
    description text,
    short_description text,
    price numeric(12,2) NOT NULL,
    compare_at_price numeric(12,2),
    stock integer NOT NULL DEFAULT 0,
    sku text,
    brand text,
    category_id uuid,
    images jsonb,
    thumbnail text,
    is_featured boolean NOT NULL DEFAULT false,
    is_active boolean NOT NULL DEFAULT true,
    tags jsonb,
    rating numeric(3,2),
    review_count integer NOT NULL DEFAULT 0,
    warranty text,
    dimensions jsonb,
    weight numeric,
    source text NOT NULL,
    source_id text NOT NULL,
    source_url text NOT NULL,
    scraped_at timestamptz NOT NULL DEFAULT now(),
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS ux_products_source_source_id
    ON public.products (source, source_id);

CREATE INDEX IF NOT EXISTS ix_products_source
    ON public.products (source);

CREATE INDEX IF NOT EXISTS ix_products_source_id
    ON public.products (source_id);

CREATE INDEX IF NOT EXISTS ix_products_category_id
    ON public.products (category_id);

CREATE INDEX IF NOT EXISTS ix_products_brand
    ON public.products (brand);

CREATE INDEX IF NOT EXISTS ix_products_is_active
    ON public.products (is_active);

CREATE INDEX IF NOT EXISTS ix_products_is_featured
    ON public.products (is_featured);

CREATE INDEX IF NOT EXISTS ix_products_price
    ON public.products (price);

CREATE INDEX IF NOT EXISTS ix_products_scraped_at
    ON public.products (scraped_at);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_products_set_updated_at ON public.products;

CREATE TRIGGER trg_products_set_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();
