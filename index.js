const express = require('express');
const port = 3000;
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
require("dotenv").config();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Jobs, Jobs, Jobs');
})

const usersController = require('./controllers/usersController');
app.use('/user', usersController);

const jobsController = require('./controllers/jobsController');
app.use('/job', jobsController);

const authController = require("./controllers/authController");
app.use("/auth/", authController);

app.listen(port, () => {
  console.log('listening on localhost:' + port);
});