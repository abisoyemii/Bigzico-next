import { buildSupabaseClient } from '../src/services/supabase';

async function main() {
  const supabase = buildSupabaseClient();

  if (!supabase) {
    throw new Error('Supabase is not configured.');
  }

  const { data, error } = await supabase
    .from('products')
    .select('source_id, name, thumbnail, images')
    .eq('source', 'fouani');

  if (error) {
    throw new Error(error.message);
  }

  const products = data ?? [];

  let zero = 0;
  let one = 0;
  let twoToFour = 0;
  let fivePlus = 0;

  for (const product of products) {
    const count = Array.isArray(product.images)
      ? product.images.length
      : 0;

    if (count === 0) zero++;
    else if (count === 1) one++;
    else if (count <= 4) twoToFour++;
    else fivePlus++;
  }

  console.log('=== FOUANI IMAGE VERIFICATION ===');
  console.log(`Products: ${products.length}`);
  console.log(`0 images: ${zero}`);
  console.log(`1 image: ${one}`);
  console.log(`2-4 images: ${twoToFour}`);
  console.log(`5+ images: ${fivePlus}`);

  console.log('\n--- SAMPLE IMAGE GALLERIES ---');

  products
    .filter((p) => Array.isArray(p.images) && p.images.length > 1)
    .slice(0, 5)
    .forEach((product, index) => {
      console.log(`\n${index + 1}. ${product.name}`);
      console.log(`Source ID: ${product.source_id}`);
      console.log(`Image count: ${product.images.length}`);

      product.images.slice(0, 5).forEach((image: string, i: number) => {
        console.log(`  ${i + 1}. ${image}`);
      });
    });

  console.log('\n================================');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});