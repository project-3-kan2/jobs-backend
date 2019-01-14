DROP DATABASE IF EXISTS jobs;
CREATE DATABASE jobs;

\c jobs

CREATE TABLE users
(
  id serial primary key,
  username varchar unique not null,
  email varchar unique not null,
  phone varchar(10) not null
);

CREATE TABLE saved_job
(
  id serial primary key,
  title varchar,
  description varchar,
  job_url varchar,
  job_location varchar,
  company_logo varchar,
  FOREIGN KEY (user_id) REFERENCES users ON DELETE CASCADE
);

