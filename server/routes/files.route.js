const Route = require('express')
const route = new Route()
const filesController = require('../controller/files.controller')

route.get('/isLogin', filesController.isLogin)

module.exports = route;