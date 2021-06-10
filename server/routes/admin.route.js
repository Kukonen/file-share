const Route = require('express')
const route = new Route()
const adminControoler = require('../controller/admin.controller')

route.post('/admin', adminControoler.admin);
route.get('/isadmin', adminControoler.isAdmin)

module.exports = route;