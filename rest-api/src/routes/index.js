const calculate = require('./calculate/calculateRoutes');
// const auth = require('./auth/authRoutes');

module.exports = (app) => {
  calculate(app);
  // auth(app);
}