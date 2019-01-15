const express = require('express');
const router = express.Router();

const job = require('../models/job');

const sendNewJob = (req,res) => res.json(res.locals.job);
const sendFoundJob = (req, res) => res.json(res.locals.job);
const sendSuccess = (req, res) => res.json({ message: 'success' });

router.post('/', job.create, sendNewJob);
router.get('/:id', job.find, sendFoundJob);
router.delete('/:id', job.delete, sendSuccess);


module.exports = router;