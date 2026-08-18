import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('SUPABASE_URL_DETECTED=' + Boolean(supabaseUrl));
console.log('SUPABASE_SERVICE_ROLE_KEY_DETECTED=' + Boolean(supabaseServiceRoleKey));

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabaseKey: string = supabaseServiceRoleKey;
const url = new URL('/rest/v1/', supabaseUrl).toString();

async function main() {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${supabaseKey}`,
        apikey: supabaseKey,
        Accept: 'application/json',
      },
    });

    console.log('HTTP_STATUS=' + response.status);
    console.log('HTTP_STATUS_TEXT=' + response.statusText);

    const text = await response.text();
    const preview = text ? text.slice(0, 200).replace(/\s+/g, ' ') : '';

    if (preview) {
      console.log('RESPONSE_PREVIEW=' + preview);
    }

    if (response.ok) {
      console.log('CONNECTION=successful');
      console.log('AUTHENTICATION=successful');
      return;
    }

    if (response.status === 401 || response.status === 403) {
      console.log('CONNECTION=successful');
      console.log('AUTHENTICATION=failed');
      return;
    }

    console.log('CONNECTION=failed');
    console.log('AUTHENTICATION=unknown');
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    console.log('HTTP_STATUS=ERROR');
    console.log('HTTP_STATUS_TEXT=' + message);
    console.log('CONNECTION=failed');
    console.log('AUTHENTICATION=unknown');
  }
}

main();
