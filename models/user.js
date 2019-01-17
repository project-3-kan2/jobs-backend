var db = require('../db/config');
var bcrypt = require("bcrypt");
var user = {}; 

user.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  db.one("INSERT INTO users (username, firstname, lastname, email, password_digest, phone) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;",
    [req.body.username.toLowerCase(), req.body.firstname, req.body.lastname, req.body.email.toLowerCase(), bcrypt.hashSync(req.body.password, salt), req.body.phone])
    .then(result => {
      res.locals.user = result;
      next()
    })
    .catch(error => {
      console.log(error);
      next();
    })
}

user.find = (req, res, next) => {
  db.one("SELECT * FROM users WHERE username=$1;",
    [req.params.username])
    .then(result => {
      res.locals.user = result;
      next()
    })
    .catch(error => {
      console.log(error);
      next();
    })
}
user.checkUsername = (req, res, next) => {
  db.oneOrNone("SELECT * FROM users WHERE username=$1;", [req.body.username])
    .then(function(result) {
      res.user = result;
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

user.login = (req, res, next) => {
  db.one("SELECT * FROM users WHERE username = $1;", [req.body.username])
    .then(function(result) {
      if (bcrypt.compareSync(req.body.password, result.password_digest)) {
        req.user = result;
      }
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

user.update = (req, res, next) => {
  db.one("UPDATE users SET username=$1, firstname=$2, lastname=$3 email=$4, phone=$5, WHERE id=$6 RETURNING *;",
    [req.body.username, req.body.firstname, req.body.lastname, req.body.email, req.body.phone, req.params.id])
    .then(result => {
      res.locals.user = result;
      next()
    })
    .catch(error => {
      console.log(error);
      next();
    })
}

module.exports = user;