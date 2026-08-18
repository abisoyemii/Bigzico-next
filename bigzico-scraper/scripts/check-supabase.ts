import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('URL_PRESENT=' + Boolean(url));
console.log('KEY_PRESENT=' + Boolean(key));
console.log('URL_HOST=' + (url ? new URL(url).hostname : 'missing'));

if (!url || !key) {
  console.error('SUPABASE_CONFIG_MISSING');
  process.exit(1);
}

const supabase = createClient(url, key, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

async function listTables() {
  const { data, error } = await supabase.rpc('pg_tables');
  if (!error && Array.isArray(data)) {
    return data;
  }

  const { data: listData, error: listError } = await supabase.from('pg_tables').select('*').limit(10);
  if (listError) {
    throw new Error(`TABLE_LIST_ERROR: ${listError.message}`);
  }
  return listData ?? [];
}

async function main() {
  try {
    console.log('CONNECTION_TEST=START');
    const { data, error } = await supabase.from('products').select('id').limit(1);

    if (error) {
      console.log('CONNECTION_TEST=CONNECTED_BUT_TABLE_NOT_FOUND');
      console.log('ERROR_MESSAGE=' + error.message);
    } else {
      console.log('CONNECTION_TEST=CONNECTED');
      console.log('SAMPLE_ROWS=' + (Array.isArray(data) ? data.length : 0));
    }

    const candidates = [
      'users', 'User', 'user',
      'categories', 'Category', 'category',
      'products', 'Product', 'product',
      'carts', 'Cart', 'cart',
      'cart_items', 'CartItem', 'cartitem',
      'orders', 'Order', 'order',
      'order_items', 'OrderItem', 'orderitem',
      'payments', 'Payment', 'payment',
      'reviews', 'Review', 'review',
      'wishlists', 'Wishlist', 'wishlist',
      'wishlist_items', 'WishlistItem', 'wishlistitem'
    ];

    const found: string[] = [];
    for (const tableName of candidates) {
      try {
        const { error } = await supabase.from(tableName).select('id').limit(1);
        if (!error) {
          found.push(tableName);
        }
      } catch {
        // ignore missing tables
      }
    }

    console.log('FOUND_TABLES=' + (found.length ? found.join(',') : 'NONE'));

    const productNames = ['products', 'Product', 'product'];
    const productTable = productNames.find((name) => {
      try {
        // This read-only check is intentionally permissive for the current safe inspection
        return true;
      } catch {
        return false;
      }
    }) ?? 'products';

    const { data: columns, error: colsError } = await supabase.from(productTable).select('*').limit(1);
    if (colsError) {
      console.log('PRODUCT_TABLE_SCAN=UNAVAILABLE');
      console.log('PRODUCT_TABLE_ERROR=' + colsError.message);
    } else {
      const sample = Array.isArray(columns) && columns[0] ? Object.keys(columns[0]) : [];
      console.log('PRODUCT_TABLE=' + productTable);
      console.log('PRODUCT_COLUMNS=' + sample.join(','));
    }

    const { count, error: countError } = await supabase.from('products').select('*', { count: 'exact', head: true });
    if (countError) {
      console.log('PRODUCT_ROW_COUNT=UNAVAILABLE');
      console.log('COUNT_ERROR=' + countError.message);
    } else {
      console.log('PRODUCT_ROW_COUNT=' + count);
    }
  } catch (error: unknown) {
    console.error('SCRIPT_ERROR=' + (error instanceof Error ? error.message : String(error)));
    process.exit(1);
  }
}

main();
