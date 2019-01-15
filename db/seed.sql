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
  company_name varchar,
  FOREIGN KEY (user_id) REFERENCES users ON DELETE CASCADE
);

INSERT INTO users (username, email, phone) VALUES ('aisha','a@a.com', '0550123456' );
INSERT INTO users (username, email, phone) VALUES ('nada', 'n@n.com', '0550654321' );
INSERT INTO users (username, email, phone) VALUES ('nawaf', 'n2@n.com', '0550123123' );
INSERT INTO users (username, email, phone) VALUES ('khaled','k@k.com', '0550321321' );
