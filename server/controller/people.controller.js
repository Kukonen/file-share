const db = require('../db');

class peopleController {
    async getAllPeople(req, res) {
        let people = [];

        await db.query(`SELECT * FROM public."users"`).then((result) => {
            people = JSON.parse(JSON.stringify(result.rows)) 
    })

    res.json(people);
    return;
    }

    async getOne(req, res) {
        const id = req.body.id

        let user = [];

        await db.query(`SELECT * FROM public."users" WHERE id = '${id}'`).then((result) => {
            user = JSON.parse(JSON.stringify(result.rows)) 
        })
        
        if (user.length === 0) {
            res.json({
                status: "no matches"
            })
        } else {
            res.json({
                status: "find user",
                name: user[0].name
            })
        }
    }
}

module.exports = new peopleController();