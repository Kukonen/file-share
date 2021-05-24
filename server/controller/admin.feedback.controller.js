const db = require('../db');
const nodemailer = require('nodemailer');

class FeedbackController{
    async getNotAnswerdCount(req, res) {
        let data = []

        await db.query(`SELECT * FROM public."problems" WHERE isresolved = 'false'`).then(result => {
            data = JSON.parse(JSON.stringify(result.rows))
        }).catch(e => console.log(e))
        res.json({
            status: "ok",
            count: data.length
        })
    }

    async getNotAnswerdQuestions(req, res) {
        let questionsData = []

        await db.query(`SELECT * FROM public."problems" WHERE isresolved = 'false'`).then(result => {
            questionsData = JSON.parse(JSON.stringify(result.rows))
        }).catch(e => console.log(e))


        const data = await Promise.all(questionsData.map(async (question) => {
            let userData = []
            
            await db.query(`SELECT * FROM public."users" WHERE email = '${question.email}'`).then(result => {
                userData = JSON.parse(JSON.stringify(result.rows))
            }).catch(e => console.log(e))


            return {
                ...question, 
                name: userData[0].name
            }
        }))

        res.json({
            status: "ok",
            questions: data
        })
    }

    async sendProblemSolution(req, res) {
        const {id, email, message} = req.body;

        await db.query(`UPDATE public."problems" SET isresolved = '${true}', answer = '${message}' WHERE id = '${id}'`).then()

        let sendingMessage = {
            from: "test.mail.for.app@mail.ru",
            to: email,
            subject: "Response from technical support",
            text: "Plaintext version of the message",
            html: `${message}`
        };

        let transporter = nodemailer.createTransport({
            host: "smtp.mail.ru",
            port: 465,
            secure: true,
            auth: {
                user: "test.mail.for.app@mail.ru",
                pass: "q0GFPWOQoRCNsDfulnms"
            }
        });

        await transporter.sendMail(sendingMessage).then(() => {
            res.json({
                status: "ok"
            })
        })
    }
}

module.exports = new FeedbackController();