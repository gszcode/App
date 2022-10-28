const { body, validationResult } = require('express-validator')

const resultValidator = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() })
  }

  next()
}

// Validations
export const registerValidator = [
  body('name')
    .toLowerCase()
    .trim()
    .notEmpty()
    .withMessage('Enter your Name')
    .isLength({ min: 4 })
    .withMessage('Name must have more than 4 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Enter your Email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Enter a valid Email'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Enter your Password')
    .isLength({ min: 8 })
    .withMessage('Password must have more than 8 characters'),
  body('repassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match')
    }

    return true
  }),
  resultValidator
]

export const loginValidator = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Enter your Email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Invalid Email or Password'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Enter your Password')
    .isLength({ min: 8 })
    .withMessage('Invalid Email or Password'),
  resultValidator
]
