const Route = require('express')
const route = new Route()
const profileController = require('../controller/profile.controller')

route.post('/isLogged', profileController.isLogged)
route.post('/changename', profileController.changeName)

module.exports = route;