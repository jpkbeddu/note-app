var express = require('express');
var router = express.Router();
var userList = require('./../data/user-list');
var authLogin = require('./../config/auth-login');

// Get all users - only admin use
router.get('/', authLogin.requiresRole('admin'), userList.GetUsers);

module.exports = router;
