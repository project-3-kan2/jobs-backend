var connection = require('../db/config');

var jobs = {};

jobs.getAll = (req, res, next) => {
    connection.manyOrNone("SELECT * FROM saved_jobs;") 
      .then(result => {
          res.locals.jobs = result;
          next();
      })
      .catch(error => {
        console.log(error);
        next();
      })
  }
  
  jobs.create = function(req, res, next){
    connection.one("INSERT INTO jobs() VALUES($) RETURNING *;",
    [req.body.name, req.body.rgb, req.body.hex])
      .then(result => {
        res.locals.job = result;
        next()
      })
      .catch(error => {
        console.log(error);
        next();
      })
  }
  
  jobs.delete = function(req, res, next){
    connection.none('DELETE FROM jobs WHERE id=$1;', [req.params.id])
      .then(()=>{
        console.log('successful delete');
        next();
      })
      .catch(error => {
        console.log(error); 
        next();
      })
  }

module.exports = jobs;