const { body, validationResult } = require('express-validator')


const contactValidationRules = () => {
    return [
      // username must be an email
      body('firstName', 'First Name is required')
      .trim()
      .isLength({ min: 1 })
      .escape(),
      body('lastName', 'Last Name is required')
      .trim()
      .isLength({ min: 1 })
      .escape(),
      body('email', 'Please include a valid email')
      .trim()
      .isEmail()
      .normalizeEmail()
      .escape(),
      body('favoriteColor', 'Favorite color is required')
      .trim()
      .isLength({ min: 1 })
      .escape(),
      body('birthday', 'Birthday is screwing up')
      .escape()
      .trim()
      .isLength({ min: 1 })
      .custom( async (birthday) => {
        console.log(birthday)
        var checkDate = /([1-9]|0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])-(\d{4}$)/
        birthday.replace("\\","\\\\");
        console.log(birthday)
        console.log(checkDate)
        console.log(checkDate.test(birthday))
        if (checkDate.test(birthday) == false) {
            
            throw new Error("Birthday is not a valid format")
        }
      })
    ]
  }

  const contactValidate = (req, res, next) => {
    
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
    return res.status(422).json({
        errors: extractedErrors,
      })
  }

  module.exports = {
    contactValidationRules,
    contactValidate,
  }