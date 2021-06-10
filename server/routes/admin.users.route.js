const Route = require('express')
const route = new Route()
const usersController = require('../controller/admin.users.controller')

route.get('/getusers', usersController.getUsers);
route.post('/changename', usersController.changeName)
route.post('/changeemail', usersController.changeEmail)
route.post('/changepassword', usersController.chanegePassword)
route.post('/changerole', usersController.chanegeRole)

module.exports = route;