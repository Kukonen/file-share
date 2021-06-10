const db = require('../db');
const sha256 = require('js-sha256');
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

    async changeName(req, res) {

        {
            let data = []
            const key = req.cookies.key
            await db.query(`SELECT * FROM public."users" WHERE key = '${key}' AND role = 'admin'`).then(result => {
                data = JSON.parse(JSON.stringify(result.rows))
            }).catch(e => console.log(e))

            if (data.length === 0) return true;
        }

        const {email, name} = req.body

        let data = []

        await db.query(`UPDATE public."users" SET name = '${name}' WHERE email = '${email}'`).then(result => {
            data = JSON.parse(JSON.stringify(result.rows))
        }).catch(e => console.log(e))

        res.json({
            status: "ok"
        })
    }

    async changeEmail(req, res) {

        {
            let data = []
            const key = req.cookies.key
            await db.query(`SELECT * FROM public."users" WHERE key = '${key}' AND role = 'admin'`).then(result => {
                data = JSON.parse(JSON.stringify(result.rows))
            }).catch(e => console.log(e))

            if (data.length === 0) return true;
        }

        const {newEmail, lastEmail} = req.body

        let data = []

        await db.query(`UPDATE public."users" SET email = '${newEmail}' WHERE email = '${lastEmail}'`).then(result => {
            data = JSON.parse(JSON.stringify(result.rows))
        }).catch(e => console.log(e))

        res.json({
            status: "ok"
        })
    }

    async chanegePassword(req, res) {

        {
            let data = []
            const key = req.cookies.key
            await db.query(`SELECT * FROM public."users" WHERE key = '${key}' AND role = 'admin'`).then(result => {
                data = JSON.parse(JSON.stringify(result.rows))
            }).catch(e => console.log(e))

            if (data.length === 0) return true;
        }

        const {password, email} = req.body

        const paswordPlusSalt = password + 'fgvhbjnm';
		const hashPassword = sha256(paswordPlusSalt);

        let data = []

        await db.query(`UPDATE public."users" SET password = '${hashPassword}' WHERE email = '${email}'`).then(result => {
            data = JSON.parse(JSON.stringify(result.rows))
        }).catch(e => console.log(e))

        res.json({
            status: "ok"
        })
    }
    async chanegeRole(req, res) {

        {
            let data = []
            const key = req.cookies.key
            await db.query(`SELECT * FROM public."users" WHERE key = '${key}' AND role = 'admin'`).then(result => {
                data = JSON.parse(JSON.stringify(result.rows))
            }).catch(e => console.log(e))

            if (data.length === 0) return true;
        }

        const {role, email} = req.body

        if ((role !== "user") && (role !== "admin")) {
            res.json({
                status: "error",
                description: "role not found"
            })
            return
        }

        let data = []

        await db.query(`UPDATE public."users" SET role = '${role}' WHERE email = '${email}'`).then(result => {
            data = JSON.parse(JSON.stringify(result.rows))
        }).catch(e => console.log(e))

        res.json({
            status: "ok"
        })
    }
}

module.exports = new usersController();