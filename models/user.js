var db = require('../db/config');

var user = {}; 

user.create = function (req, res, next) {
  db.one("INSERT INTO users (username, email, phone) VALUES($1, $2, $3) RETURNING *;",
    [req.body.name, req.body.email, req.body.phone])
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
  db.one("SELECT * FROM users WHERE id=$1;",
    [req.params.id])
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
  db.one("UPDATE users SET username=$1, email=$2, phone=$3, WHERE id=$4 RETURNING *;",
    [req.body.name, req.body.email, req.body.phone, req.body.id])
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