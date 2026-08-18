import { buildSupabaseClient } from '../src/services/supabase';

async function main() {
  const supabase = buildSupabaseClient();

  if (!supabase) {
    throw new Error(
      'Supabase is not configured. Check SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.'
    );
  }

  console.log('=== BIGZICO FOUANI DATABASE VERIFICATION ===');

  // Total Fouani products
  const { count, error: countError } = await supabase
    .from('products')
    .select('id', { count: 'exact', head: true })
    .eq('source', 'fouani');

  if (countError) {
    throw new Error(`Count failed: ${countError.message}`);
  }

  console.log(`Fouani products in Supabase: ${count}`);

  // Check for duplicate source IDs
  const { data: products, error: productsError } = await supabase
    .from('products')
    .select(
      'id, source_id, name, price, stock, source_url, thumbnail, images'
    )
    .eq('source', 'fouani');

  if (productsError) {
    throw new Error(
      `Product query failed: ${productsError.message}`
    );
  }

  const rows = products ?? [];

  const sourceIds = rows.map((row) => String(row.source_id));

  const duplicateIds = sourceIds.filter(
    (id, index) => sourceIds.indexOf(id) !== index
  );

  const missingName = rows.filter(
    (row) => !row.name?.trim()
  );

  const missingPrice = rows.filter(
    (row) => row.price === null || Number(row.price) <= 0
  );

  const missingSourceUrl = rows.filter(
    (row) => !row.source_url?.trim()
  );

  const missingImages = rows.filter((row) => {
    if (Array.isArray(row.images)) {
      return row.images.length === 0;
    }

    return !row.thumbnail;
  });

  console.log('\n--- DATA QUALITY ---');
  console.log(`Rows returned: ${rows.length}`);
  console.log(`Duplicate source IDs: ${duplicateIds.length}`);
  console.log(`Missing names: ${missingName.length}`);
  console.log(`Invalid/missing prices: ${missingPrice.length}`);
  console.log(`Missing source URLs: ${missingSourceUrl.length}`);
  console.log(`Missing images: ${missingImages.length}`);

  console.log('\n--- SAMPLE PRODUCTS ---');

  rows.slice(0, 5).forEach((product, index) => {
    console.log(`\n${index + 1}. ${product.name}`);
    console.log(`   Source ID: ${product.source_id}`);
    console.log(`   Price: ${product.price}`);
    console.log(`   Stock: ${product.stock}`);
    console.log(`   URL: ${product.source_url}`);
    console.log(`   Thumbnail: ${product.thumbnail ?? 'null'}`);
  });

  console.log('\n============================================');

  if (count !== 681) {
    console.warn(
      `WARNING: Expected 681 Fouani products but found ${count}.`
    );
  }

  if (
    duplicateIds.length === 0 &&
    missingName.length === 0 &&
    missingPrice.length === 0 &&
    missingSourceUrl.length === 0 &&
    missingImages.length === 0
  ) {
    console.log('RESULT: Fouani import verification PASSED');
  } else {
    console.warn(
      'RESULT: Fouani import completed, but data-quality issues were detected.'
    );
  }

  console.log('============================================');
}

main().catch((error) => {
  console.error('\nVERIFICATION FAILED');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});