var express = require('express');
var router = express.Router();
const UserController = require('../controller/user')
/* GET users listing. */
router.post('/register',UserController.register);
router.post('/login',UserController.login);

module.exports = router;
