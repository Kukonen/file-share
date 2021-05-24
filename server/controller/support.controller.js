const db = require('../db');

class supportController {
    async sendProblem(req, res) {
        let user = []

        await db.query(`SELECT * FROM public."users" WHERE key = '${req.cookies.key}'`).then((result) => {
            user = JSON.parse(JSON.stringify(result.rows));
        }).catch(e => console.log('error db'))

        await db.query(`INSERT INTO public."problems" (email, problem, isresolved, title) values ($1, $2, $3, $4)`, [user[0].email, req.body.text, false, req.body.title]).then();

        res.json("ok")
    }

}

module.exports = new supportController();