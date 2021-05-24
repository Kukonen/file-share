const db = require('../db');

class FeedbackController{
    async getNotAnswerdCount(req, res) {
        let data = []

        await db.query(`SELECT * FROM public."problems" WHERE isresolved = 'false'`).then(result => {
            data = JSON.parse(JSON.stringify(result.rows))
        }).catch(e => console.log(e))
        res.json({
            status: "ok",
            count: data.length
        })
    }

    async getNotAnswerdQuestions(req, res) {
        let questionsData = []

        await db.query(`SELECT * FROM public."problems" WHERE isresolved = 'false'`).then(result => {
            questionsData = JSON.parse(JSON.stringify(result.rows))
        }).catch(e => console.log(e))


        const data = await Promise.all(questionsData.map(async (question) => {
            let userData = []
            
            await db.query(`SELECT * FROM public."users" WHERE email = '${question.email}'`).then(result => {
                userData = JSON.parse(JSON.stringify(result.rows))
            }).catch(e => console.log(e))


            return {
                ...question, 
                name: userData[0].name
            }
        }))

        res.json({
            status: "ok",
            questions: data
        })
    }

    async sendProblemSolution(req, res) {
        const {email, message} = req.body;
        
        let sendingMessage = {
            from: "test.mail.for.app@mail.ru",
            to: email,
            subject: "File share",
            text: "Plaintext version of the message",
            html: `
            ${message}
            `
        };
    }
}

module.exports = new FeedbackController();