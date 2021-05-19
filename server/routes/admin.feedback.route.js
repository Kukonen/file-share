const Route = require('express')
const route = new Route()
const FeedbackController = require('../controller/admin.feedback.controller')

route.get('/notansweredcount', FeedbackController.getNotAnswerdCount);

module.exports = route;