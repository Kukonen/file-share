const Route = require('express')
const route = new Route()
const supportController = require('../controller/support.controller')

route.post('/send', supportController.sendProblem)

module.exports = route;