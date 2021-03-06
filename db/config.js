// configure postgres to connect our db to our express app
const pgPromise = require('pg-promise');
const pgInstance = pgPromise();

const config = {
  host: 'localhost',
  port: 5432,
  database: 'jobs',
  user: 'khalid' // your username here!!
}

const connection = pgInstance(process.env.DATABASE_URL || config);

module.exports = connection;