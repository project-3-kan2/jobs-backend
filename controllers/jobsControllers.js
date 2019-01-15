const express = require('express');
const router = express.Router();

const job = require('../models/job');

const sendNewJob = (res,req) => res.json(res.locals.job);
const sendFoundJob = (res, req) => res.json(res.locals.job);
const sendSuccess = (res, req) => res.json({ message: 'success' });

router.post('/', job.create, sendNewJob);
router.get('/:id', job.find, sendFoundJob);
router.delete('/:id', job.delete, sendSuccess);


module.exports = router;