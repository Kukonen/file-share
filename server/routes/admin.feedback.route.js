const Route = require('express')
const route = new Route()
const FeedbackController = require('../controller/admin.feedback.controller')

route.get('/notansweredcount', FeedbackController.getNotAnswerdCount);
route.get('/getalreadyanswerdcount', FeedbackController.getAlreadyAnswerdCount);
route.get('/getnotanswerdquestions', FeedbackController.getNotAnswerdQuestions)
route.post('/sendproblemsolution', FeedbackController.sendProblemSolution)
route.get('/getalreadyanswerdquestions', FeedbackController.getAlreadyAnswerdQuestions)

module.exports = route;