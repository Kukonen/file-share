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
        let data = []

        await db.query(`SELECT * FROM public."problems" WHERE isresolved = 'false'`).then(result => {
            data = JSON.parse(JSON.stringify(result.rows))
        }).catch(e => console.log(e))
        res.json({
            status: "ok",
            questions: data
        })
    }
}

module.exports = new FeedbackController();