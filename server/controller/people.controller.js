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
        console.log(req.params.id)
    }
}

module.exports = new peopleController();