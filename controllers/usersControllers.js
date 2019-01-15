const express = require('express');
const router = express.Router();

const user = require('../models/user');

const sendNewUser = (req,res) => res.json(res.locals.user);
const sendUser = (req, res) => res.json(res.locals.user);
const sendUpdatedUser = (req, res) => res.json(res.locals.user);

router.post('/', user.create, sendNewUser);
router.put('/:id', user.update, sendUpdatedUser);
router.get('/:id', user.find, sendUser);

module.exports = router;