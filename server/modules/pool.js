const pg = require('pg');
const url = require('url');

let config = {};

if (process.env.DATABASE_URL) {
  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: { rejectUnauthorized: false },
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };
} else {
  config = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host:
      "localhost" ||
      "app-27425cfb-c67d-4082-aa02-effa3f0e556e-do-user-8379856-0.b.db.ondigitalocean.com",
    port: 5432 || 25060,
    database: process.env.DATABASE_NAME || "no_stock_notify",
    sslmode: "require",
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };
}

// this creates the pool that will be shared by all other modules
const pool = new pg.Pool(config);

pool.on('error', (err) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
