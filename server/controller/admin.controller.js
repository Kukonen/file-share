const db = require('../db');

class adminController {
    async admin(req, res) {
        res.json('ok')
    }
}

module.exports = new adminController();