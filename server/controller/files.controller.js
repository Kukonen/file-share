const db = require('../db');
const uuid = require('uuid')
const formidable = require('formidable');
const fs = require('fs');

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

    async sendFile(req, res) {
        const form = formidable({multiples: true});
        let file = null;
        let userInformation = {};
        let fileName = uuid.v4();

        await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) {
                    reject(() => console.log(err));
                    return;
                }
                userInformation = JSON.parse(JSON.stringify(fields));
                file = files.file
                resolve()
            })
        }).then(async () => {
            let years = new Date().getFullYear();
            let month = new Date().getMonth() + 1;
            let day = new Date().getDate();
            let hour = new Date().getHours();
            let minutes = new Date().getMinutes();
            let seconds = new Date().getSeconds();

            let date = '' + years + '.' + month + '.' + day + '.' + hour + '.' + minutes + '.' + seconds;

            let user = []

            await db.query(`SELECT * FROM public."users" WHERE key = '${req.cookies.key}'`).then((result) => {
                user = JSON.parse(JSON.stringify(result.rows));
            }).catch(e => console.log('error db'))

            if (file.name.split.length - 1 > 0)
                fileName = fileName + '.' +file.name.split('.')[file.name.split.length - 1];

            fs.rename(file.path, `C:\\Users\\evgen\\Desktop\\react-apps\\file-share-pern\\server\\files` + `\\` + fileName, () => {console.log("file repath")})
            await db.query(`INSERT INTO public."files" (name, path, date, owner) values ($1, $2, $3, $4)`, [file.name, fileName, date, user[0].id]).then();
            }).catch(e => console.log(`error: ${e}`));
    }

    async getFiles(req, res) {

        if (req.body.settings === "own files") {
            let files = [];
            let user = [];

            await db.query(`SELECT * FROM public."users" WHERE key = '${req.cookies.key}'`).then((result) => {
                user = JSON.parse(JSON.stringify(result.rows));
            }).catch(e => console.log('error db'))

            await db.query(`SELECT * FROM public."files" WHERE owner = '${user[0].id}'`).then((result) => {
                files = JSON.parse(JSON.stringify(result.rows));
            }).catch(e => console.log(`error: ${e}`))

            res.json(files);
            return;
        }
        
    }
}

module.exports = new filesController();