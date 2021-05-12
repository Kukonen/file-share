const Route = require('express');
const route = new Route();
const peopleController = require('../controller/people.controller');

route.get('/getallpeople', peopleController.getAllPeople)
route.post('/:id', peopleController.getOne)

module.exports = route;