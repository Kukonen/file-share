const db = require('../db');

class adminController {
    async admin(req, res) {
        res.json('ok')
    }
    async isAdmin(req, res) {
        let data = []
        const key = req.cookies.key
        await db.query(`SELECT * FROM public."users" WHERE key = '${key}' AND role = 'admin'`).then(result => {
            data = JSON.parse(JSON.stringify(result.rows))
        }).catch(e => console.log(e))

        if (data.length === 0) {
            res.json({
                status: "ok",
                isAdmin: false
            })
        }
        else {
            res.json({
                status: "ok",
                isAdmin: true
            })
        }
    }
}

module.exports = new adminController();