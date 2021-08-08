const router = require('express').Router();
const { signIn, signUp } = require('./authServices')
const validateUser = require('../../validation/validateUser');

module.exports = app => {

  router.get('/current', (req, res) => {
    res.send(req.body.username);
  });

  router.post('/signup',
    validateUser(),
    (req, res) => {
      signUp(req, res)
    });

  router.post('/signin',
    validateUser(),
    (req, res) => {
      signIn(req, res)
    });

  app.use('/user', router);
}