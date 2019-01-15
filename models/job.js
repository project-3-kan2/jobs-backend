var db = require('../db/config');

var job = {};


job.find = (req, res, next) => {
    connection.manyOrNone("SELECT * FROM saved_jobs WHERE user_id=$1 RETURNING *;" , [req.body.id]) 
      .then(result => {
          res.locals.jobs = result;
          next();
      })
      .catch(error => {
        console.log(error);
        next();
      })
  }
  
  job.create = function(req, res, next){
    connection.one("INSERT INTO saved_job (title, description, job_url, job_location, company_logo, user_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;",
    [req.body.title, req.body.description, req.body.job_url, req.body.job_location, req.body.company_logo, req.body.user_id])
      .then(result => {
        res.locals.job = result;
        next()
      })
      .catch(error => {
        console.log(error);
        next();
      })
  }
  
  job.delete = function(req, res, next){
    connection.none('DELETE FROM jobs WHERE user_id=$1;', [req.body.id])
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