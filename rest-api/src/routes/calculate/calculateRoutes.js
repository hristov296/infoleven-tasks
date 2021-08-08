const router = require('express').Router();
const { calculateMonthlyRate } = require('./calculateServices');
const validateCalculations = require('../../validation/validateCalculations');

module.exports = app => {
  router.get('/test', (req, res) => {
    res.send('Hello World');
  });

  router.get('/',
    validateCalculations(),
    (req, res) => {
      const {
        down,
        months,
        rate,
        final = 0
      } = req.body;

      const { monthly } = calculateMonthlyRate(down, months, rate, final);

      return res.json({
        down,
        months,
        rate,
        final,
        monthly
      }).status(200);
    });

  app.use('/calculate', router);
}