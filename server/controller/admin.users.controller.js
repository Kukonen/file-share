const db = require('../db');

class usersController {
    async getUsers(req, res) {
        {
            let data = []
            const key = req.cookies.key
            await db.query(`SELECT * FROM public."users" WHERE key = '${key}' AND role = 'admin'`).then(result => {
                data = JSON.parse(JSON.stringify(result.rows))
            }).catch(e => console.log(e))

            if (data.length === 0) return true;
        }

        let data = []

        await db.query(`SELECT id, name, email, role FROM public."users"`).then(result => {
            data = JSON.parse(JSON.stringify(result.rows))
        }).catch(e => console.log(e))

        res.json({
            status: "ok",
            users: data
        })
    }
}

module.exports = new usersController();