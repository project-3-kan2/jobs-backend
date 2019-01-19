const express = require('express');
const PORT = process.env.PORT || 3000;
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors')

const app = express();
app.use(cors())

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Jobs, Jobs, Jobs');
})

const usersController = require('./controllers/usersControllers');
app.use('/user', usersController);

const jobsController = require('./controllers/jobsControllers');
app.use('/job', jobsController);

app.listen(PORT, () => {
  console.log('listening on localhost:' + port);
});