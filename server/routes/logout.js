var express = require('express');
var router = express.Router();
var authLogout = require('./../config/auth-logout');

/* POST and authenticate the username and password */
router.post('/', authLogout.Logout);

module.exports = router;
