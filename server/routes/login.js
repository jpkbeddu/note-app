var express = require('express');
var router = express.Router();
var authLogin = require('./../config/auth-login');

/* POST and authenticate the username and password */
router.post('/', authLogin.LoginAuthenticate);

module.exports = router;
