const pgPromise = require('pg-promise');
const pgInstance = pgPromise();

const config = {
  host: 'localhost',
  port: 5432,
  database: 'jobs',
  user: process.env.DB_HOST
}

const connection = pgInstance(config);

module.exports = connection;