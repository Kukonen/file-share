const db = require('../db');
const sha256 = require('js-sha256');

class profileController {
    async isLogged(req, res) {
        let user = []

        await db.query(`SELECT * FROM public."users" WHERE key = '${req.cookies.key}'`).then((result) => {
            user = JSON.parse(JSON.stringify(result.rows));
        }).catch(e => console.log('error db'))

        if (user.length !== 0) {
            res.json({status: "ok"})
        } else {
            res.json({status: "ERROR"})
        }
    }

    async changeName(req, res) {
        let user = []

        const name = req.body.name;

        await db.query(`UPDATE public."users" SET name = '${name}' WHERE key = '${req.cookies.key}'`).then((result) => {
            user = JSON.parse(JSON.stringify(result.rows));
        }).catch(e => console.log('error db'))

        res.json("ok")
    }

    async takeInformation(req, res) {
        let user = []

        await db.query(`SELECT * FROM public."users" WHERE key = '${req.cookies.key}'`).then((result) => {
            user = JSON.parse(JSON.stringify(result.rows));
        }).catch(e => console.log('error db'))

        if (user.length !== 0) {
            res.json({
                status: "ok",
                name: user[0].name
            })  
            return
        }
        else {
            res.json(({
                status: "404"
            }))
        }
    }

    async changePassword(req, res) {
        const {lastPassword, newPassword} = req.body;

        const hashLastPassword = sha256(lastPassword + 'fgvhbjnm');
        const hashNewPassword = sha256(newPassword + 'fgvhbjnm');

        let user = []

        await db.query(`UPDATE public."users" SET password = '${hashNewPassword}' WHERE key = '${req.cookies.key}' AND password = '${hashLastPassword}'`).then((result) => {
            user = JSON.parse(JSON.stringify(result.rows));
        }).catch(e => console.log('error db'))

        if (user.length !== 0) {
            res.json({
                status: "ok"
            })
            return;
        } else {
            res.json({
                status: "ERROR"
            })
            return;
        }
    }

    logout(req, res) {
        res.clearCookie('key');
        res.json("ok");
        return;
    }
}

module.exports = new profileController();