import { body, validatonResult } from 'express-validator'

// Errors
export const resultValidator = (req, res, next) => {
  const errors = validatonResult(req)

  console.log(errors)

  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() })
  }
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
      throw new Error('Password confirmation does not match password')
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
    .withMessage('Email or Password invalid'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Enter your Password')
    .isLength({ min: 8 })
    .withMessage('Email or Password invalid'),
  resultValidator
]
