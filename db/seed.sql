DROP DATABASE IF EXISTS jobs;
CREATE DATABASE jobs;

\c jobs

CREATE TABLE users
(
  id serial primary key,
  username varchar unique not null,
  firstname varchar not null,
  lastname varchar not null,
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
  user_id int not null,
  FOREIGN KEY (user_id) REFERENCES users ON DELETE CASCADE
);

INSERT INTO users (username, firstname, lastname, email, phone) VALUES ('aisha','aisha','alm','a@a.com', '0550123456' );
INSERT INTO users (username, firstname, lastname, email, phone) VALUES ('nada','nada','ash','n@n.com', '0550654321' );
INSERT INTO users (username, firstname, lastname, email, phone) VALUES ('nawaf','nawaf', 'alh', 'n2@n.com', '0550123123' );
INSERT INTO users (username, firstname, lastname, email, phone) VALUES ('khaled','khaled', 'tah', 'k@k.com', '0550321321' );
