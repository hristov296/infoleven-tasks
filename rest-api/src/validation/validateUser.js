const { body, validationResult } = require('express-validator');

module.exports = () => {
  return async (req, res, next) => {
    await Promise.all([
      body('username').not().isEmpty(),
      body('email').isEmail(),
      body('password').not().isEmpty(),
    ].map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({
      errors: errors.array()
    });
  };
};