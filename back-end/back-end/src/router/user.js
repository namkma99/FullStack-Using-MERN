const express = require('express')
const router = express.Router()
const {validateSignupReqest,validateSigninReqest, isRequestValidated} = require('../validator/auth');
const authUserController = require('../controller/AuthUserController');


// a middleware function with no mount path. This code is executed for every request to the router
router.post('/signup',validateSignupReqest,isRequestValidated,authUserController.signup);

router.post('/signin',validateSigninReqest,isRequestValidated, authUserController.signin);

// router.post('/profile', userController.requireSignin, (req, res) => {
//     res.status(400).json({user: 'profile'});
// });

module.exports = router;