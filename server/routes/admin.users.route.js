const Route = require('express')
const route = new Route()
const usersController = require('../controller/admin.users.controller')

route.get('/getusers', usersController.getUsers);

module.exports = route;