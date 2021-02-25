const express = require('express')
const router = express.Router()
const userController = require('../../controller/admin/admin');
const {validateSignupReqest,validateSigninReqest, isRequestValidated} = require('../../validator/auth');
const {requireSignin, adminMiddleware} = require('../../middleware/index');


// a middleware function with no mount path. This code is executed for every request to the router
router.post('/admin/signup',validateSignupReqest,isRequestValidated, userController.signup);

router.post('/admin/signin',validateSigninReqest,isRequestValidated, userController.signin);



module.exports = router;