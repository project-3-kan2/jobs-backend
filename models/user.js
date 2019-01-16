var db = require('../db/config');

var user = {}; 

user.create = function (req, res, next) {
  db.one("INSERT INTO users (username, firstname, lastname, email, phone) VALUES($1, $2, $3, $4, $5) RETURNING *;",
    [req.body.username.toLowerCase(), req.body.firstname, req.body.lastname, req.body.email.toLowerCase(), req.body.phone])
    .then(result => {
      res.locals.user = result;
      next()
    })
    .catch(error => {
      console.log(error);
      next();
    })
}

user.find = function (req, res, next) {
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

user.update = function (req, res, next) {
  db.one("UPDATE users SET username=$1, firstname=$2, lastname=$3, email=$4, phone=$5 WHERE id=$6 RETURNING *;",
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