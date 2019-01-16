var db = require('../db/config');

var job = {};

job.getAll = function (req, res, next) {
    db.manyOrNone("SELECT * FROM saved_job WHERE user_id=$1;" , [req.params.id]) 
      .then(result => {
          res.locals.jobs = result;
          next();
      })
      .catch(error => {
        console.log(error);
        next();
      })
  }
  
  job.create = function (req, res, next) {
    db.one("INSERT INTO saved_job (title, description, job_url, job_location, company_logo, company_name, user_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *;",
    [req.body.title, req.body.description, req.body.job_url, req.body.job_location, req.body.company_logo, req.body.company_name, req.body.user_id])
      .then(result => {
        res.locals.job = result;
        next()
      })
      .catch(error => {
        console.log(error);
        next();
      })
  }
  
  job.delete = function (req, res, next) {
    db.none('DELETE FROM jobs WHERE user_id=$1;', [req.params.id])
      .then(()=>{
        console.log('successful delete');
        next();
      })
      .catch(error => {
        console.log(error); 
        next();
      })
  }

module.exports = job;