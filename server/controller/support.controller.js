const db = require('../db');

class supportController {
    async sendProblem(req, res) {
        let user = []

        await db.query(`SELECT * FROM public."users" WHERE key = '${req.cookies.key}'`).then((result) => {
            user = JSON.parse(JSON.stringify(result.rows));
        }).catch(e => console.log('error db'))

        await db.query(`INSERT INTO public."problems" (email, problem) values ($1, $2)`, [user[0].email, req.body.text]).then();

        res.json("ok")
    }

}

module.exports = new supportController();