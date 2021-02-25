const express = require('express')
const router = express.Router()
const {addCategory,getCategory} = require('../controller/CategoryController');
const {requireSignin, adminMiddleware} = require('../middleware/index');


router.post('/category/create',requireSignin,adminMiddleware,addCategory);
router.get('/category/getcategory', getCategory);


module.exports = router;