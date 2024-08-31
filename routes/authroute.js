const express = require('express');
const AuthController = require('../controllers/authcontroller');
const route = express.Router();

route.post('/login',AuthController.login)
route.post('/login',AuthController.signup)
route.get('/checkauth',AuthController.checkauth)

module.exports = route;