const express = require('express');
const router = express.Router();

const users = require('../models/user');

const sendNewUser = (req,res) => res.json(res.locals.user);
const sendUser = (req, res) => res.json(res.locals.user);
const sendUpdatedUser = (req, res) => res.json(res.locals.user);

router.post('/', user.create, sendNewUser);
router.put('/:id', user.update, sendUpdatedUser);
router.put('/:id', user.find, sendUser);

module.exports = router;