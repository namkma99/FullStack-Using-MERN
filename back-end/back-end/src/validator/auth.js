
const { check , validationResult } = require('express-validator');

exports.validateSignupReqest = [
    check('firstName')
    .notEmpty()
    .withMessage('firstName is require'),
    check('lastName')
    .notEmpty()
    .withMessage('lastName is require'),
    check('lastName'),
    check('email')
    .isEmail()
    .withMessage('valid Email is require'),
    check('password')
    .isLength({min: 6})
    .withMessage('password muse be at least 6 character long '),
]

exports.validateSigninReqest = [
    check('email')
    .isEmail()
    .withMessage('valid Email is require'),
    check('password')
    .isLength({min: 6})
    .withMessage('password muse be at least 6 character long '),
]

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0) {
        return res.status(400).json({ errors: errors.array()[0].msg})
    }
    next();
}

