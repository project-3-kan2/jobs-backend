const express = require('express');
const router = express.Router();

const jobs = require('../models/job');

const sendNewJob = (res,req) => res.json(res.locals.job);
const sendFoundJob = (res, req) => res.json(res.locals.job);
const sendSuccess = (res, req) => res.json({ message: 'success' });

router.post('/', jobs.create, sendNewJob);
router.get('/:id', jobs.find, sendFoundJob);
router.delete('/:id', jobs.delete, sendSuccess);


module.exports = router;