DROP DATABASE IF EXISTS jobs;
CREATE DATABASE jobs;

\c jobs

CREATE TABLE users(
    id serial primary key,
    username varchar unique not null,
    email varchar unique not null,
    phone varchar(10) not null
);

CREATE TABLE saved_job( 
  id serial primary key,
  title varchar,
  discreption varchar,
  job_url varchar,
  FOREING KEY (user_id) REFERENCES users
);