var db = require('../db/config');

var user = {}; 

user.create = function (req, res, next) {
  connection.one("INSERT INTO user(username, email, phone) VALUES($1, $2, $3) RETURNING *;",
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
  connection.one("SELECT FROM user WHERE id=$1 RETURNING *;",
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
  connection.one("UPDATE user SET username=$1, email=$2, phone=$3, WHERE id=$4 RETURNING *;",
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