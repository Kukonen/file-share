const Route = require('express');
const route = new Route();
const peopleController = require('../controller/people.controller');

route.post('/getallpeople', peopleController.getAllPeople)
route.get('/:id', peopleController.getOne)

module.exports = route;