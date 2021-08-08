const { body, validationResult } = require('express-validator');

module.exports = () => {
  return async (req, res, next) => {
    await Promise.all([
      body('down').custom((val) => typeof val === 'number' && val > 0).withMessage('Please provide a greater than zero number for Down Payment'),
      body('months').custom((val) => typeof val === 'number' && val > 0).withMessage('Please provide a greater than zero number for Number of months'),
      body('rate').custom((val) => typeof val === 'number').withMessage('Please provide a number for Interest Rate'),
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