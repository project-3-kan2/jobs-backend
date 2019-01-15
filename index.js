const express = require('express');
const port = 3000;
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Jobs, Jobs, Jobs');
})

const userController = require('./controllers/usersControllers');
app.use('/user', userController);

const jobsController = require('./controllers/jobsControllers');
app.use('/job', jobsController);

app.listen(port, () => {
  console.log('listening on localhost:' + port);
});