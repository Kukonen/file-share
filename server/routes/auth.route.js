const Route = require('express')
const route = new Route()
const authController = require('../controller/auth.controller')

route.post('/login', authController.login)
route.post('/register', authController.register)

module.exports = route;