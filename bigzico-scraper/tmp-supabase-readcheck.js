const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');

dotenv.config({ path: path.resolve(process.cwd(), '.env') });
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('URL_PRESENT=' + Boolean(url));
console.log('KEY_PRESENT=' + Boolean(key));
console.log('URL_HOST=' + (url ? new URL(url).hostname : 'missing'));

if (!url || !key) {
  process.exit(1);
}

(async () => {
  const supabase = createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  const candidateTables = [
    'products', 'Product', 'product',
    'categories', 'Category', 'category',
    'users', 'User', 'user',
    'cart', 'Cart', 'carts',
    'orders', 'Order', 'order',
    'reviews', 'Review', 'review',
    'wishlist', 'Wishlist', 'wishlists',
    'payments', 'Payment', 'payment'
  ];

  const found = [];

  for (const name of candidateTables) {
    try {
      const { data, error } = await supabase.from(name).select('*').limit(1);
      if (error) continue;
      found.push({
        name,
        rows: Array.isArray(data) ? data.length : 0,
        sample: Array.isArray(data) && data[0] ? Object.keys(data[0]).slice(0, 8) : []
      });
    } catch (_) {
      // table probably absent or access blocked; ignore for read-only inspection
    }
  }

  console.log('FOUND_TABLES=' + (found.length ? found.map(item => item.name).join(',') : 'NONE'));
  for (const item of found) {
    console.log('TABLE=' + item.name + '; ROWS=' + item.rows + '; COLUMNS=' + JSON.stringify(item.sample));
  }
})();
