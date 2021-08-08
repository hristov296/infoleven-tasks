const { validationResult } = require('express-validator');
const User = require("../../models/User");

module.exports = {
  signUp: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(reqResponse.errorResponse(400));
    }

    const newUser = new User({ username, email, password } = req.body)
    try {
      let result = await newUser.save();
      res.status(200).send("Signed up successfully");
    } catch (error) {
      console.error(error);
      res.status(400).send(error)
    }
  },
  signIn: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(reqResponse.errorResponse(400));
    }

    try {
      let result = User.findOne({ username, password } = req.body);
      res.status(200).send("Signed in successfully");
    } catch (error) {
      console.error(error);
      res.status(400).send(error)
    }
  }
}