const db = require('../db');

class filesController {
    async isLogin(req, res) {
        let user = []

        await db.query(`SELECT * FROM public."users" WHERE key = '${req.cookies.key}'`).then((result) => {
            user = JSON.parse(JSON.stringify(result.rows));
        }).catch(e => console.log('error db'))

        if (user.length !== 0) {
            res.json({
                status: "ok"
            })
        } else {
            res.json({
                status: "not found"
            })
        }
    }
}

module.exports = new filesController();