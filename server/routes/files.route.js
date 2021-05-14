const Route = require('express');
const route = new Route();
const filesController = require('../controller/files.controller');

route.get('/islogin', filesController.isLogin);
route.post('/sendfile', filesController.sendFile);
route.post('/getfiles', filesController.getFiles);

module.exports = route;