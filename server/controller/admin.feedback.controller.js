const db = require('../db');

class FeedbackController{
    async getNotAnswerdCount(req, res) {
        let data = []

        await db.query(`SELECT * FROM public."problems" WHERE isresolved = 'false'`).then(result => {
            data = JSON.parse(JSON.stringify(result.rows))
        }).catch(e => console.log(e))
        console.log(data.length)
        res.json({
            status: "ok",
            count: data.length
        })
    }
}

module.exports = new FeedbackController();