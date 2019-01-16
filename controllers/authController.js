const express = require("express");
const router = express.Router();

const user = require("../models/user");

const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

router.post("/user", user.findUsername, user.create, (req, res) => {
    if (res.user) {
      res.status(400).send("Registerd");
    } else {
      const { username, firstname , lastname, email, password, phone } = req.user;
      const token = jwt.sign({ username, firstname , lastname, email, password, phone }, process.env.JWT_KEY);
      res.send({ token });
    }
  });

  router.post("/auth", user.findUsername, user.login, (req, res) => {
    if (res.user) {
      res.status(403).send("Invalid Credentials");
    } else {
      const { username, firstname , lastname, email, password, phone } = req.user;
      const token = jwt.sign({ username, firstname , lastname, email, password, phone }, process.env.JWT_KEY);
      res.send({ token });
    }
  });

module.exports = router;