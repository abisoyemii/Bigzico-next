const path = require('path');
const dotenv = require('dotenv');

function redactSensitive(value) {
  if (!value) return value;
  return String(value).replace(/(Bearer\s+)([A-Za-z0-9._-]+)/gi, '$1[REDACTED]')
    .replace(/(apikey\s*[:=]\s*)([A-Za-z0-9._-]+)/gi, '$1[REDACTED]')
    .replace(/(SUPABASE_URL\s*[:=]\s*)([^\s]+)/gi, '$1[REDACTED]')
    .replace(/(SUPABASE_SERVICE_ROLE_KEY\s*[:=]\s*)([^\s]+)/gi, '$1[REDACTED]');
}

(async () => {
  try {
    const envPath = path.resolve(process.cwd(), '.env');
    dotenv.config({ path: envPath });

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    console.log('TEST_STARTED');
    console.log(`URL_DETECTED: ${supabaseUrl ? 'YES' : 'NO'}`);
    console.log(`SECRET_DETECTED: ${supabaseServiceRoleKey ? 'YES' : 'NO'}`);

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.log('CONFIG_ERROR');
      process.exit(1);
    }

    console.log('REQUEST_STARTING');

    const requestUrl = new URL('/rest/v1/', supabaseUrl).toString();

    const controller = new AbortController();
    const timeoutMs = 15000;
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    let response;
    try {
      response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${supabaseServiceRoleKey}`,
          apikey: supabaseServiceRoleKey,
          Accept: 'application/json',
        },
        signal: controller.signal,
      });
    } catch (networkError) {
      clearTimeout(timeoutId);
      console.log('CONNECTION_RESULT: NETWORK_FAILED');
      console.log('TEST_FINISHED');
      process.exit(1);
    }

    clearTimeout(timeoutId);

    console.log(`HTTP_STATUS: ${response.status}`);
    console.log(`HTTP_STATUS_TEXT: ${response.statusText}`);

    if (response.ok) {
      console.log('CONNECTION_RESULT: SUCCESS');
    } else if (response.status === 401 || response.status === 403) {
      console.log('CONNECTION_RESULT: REACHED_BUT_AUTH_FAILED');
    } else {
      console.log('CONNECTION_RESULT: SUCCESS');
    }

    console.log('TEST_FINISHED');
  } catch (error) {
    const message = error && error.message ? String(error.message) : String(error);
    console.log('TEST_ERROR');
    console.log(redactSensitive(message));
    process.exit(1);
  }
})();
