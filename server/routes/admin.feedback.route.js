const Route = require('express')
const route = new Route()
const FeedbackController = require('../controller/admin.feedback.controller')

route.get('/notansweredcount', FeedbackController.getNotAnswerdCount);
route.get('/getnotanswerdquestions', FeedbackController.getNotAnswerdQuestions)

module.exports = route;