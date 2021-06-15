require('dotenv').config()

const db = require('../db');
const uuid = require('uuid');
const sha256 = require('js-sha256');
const nodemailer = require('nodemailer');

class authController {

		async register(req, res) { 

				const {email} = req.body;

				if (email.indexOf('@') == -1)
				{
					res.json("error");
					return;
				}

				function generationPassword() {
					const lengthPassword = 10;
					let charters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
					let passsword = "";
					for (let i = 0, n = charters.length; i < lengthPassword; ++i) {
						passsword += charters.charAt(Math.floor(Math.random() * n));
					}
					return passsword;
				}

				const password = generationPassword()
				const key = uuid.v4();
				const paswordPlusSalt = password + 'fgvhbjnm';
				const hashPassword = sha256(paswordPlusSalt);

				let usersСoincidenceСount = []
				await db.query(`SELECT * FROM public."users" WHERE email = '${email}'`).then((result) => {
					usersСoincidenceСount = JSON.parse(JSON.stringify(result.rows));
				}).catch(e => console.log('error db'))
				if (!(usersСoincidenceСount.length == 0)) {
					res.json("error");
					return;
				}
				const name = email.split('@')[0]

				await db.query(`INSERT INTO public."users" (name, email, role, password, key) values ($1, $2, $3, $4, $5)`, [name, email, "user", hashPassword, key]).then();

				let message = {
						from: `${process.env.EMAIL}`,
						to: email,
						subject: "File share",
						text: "Plaintext version of the message",
						html: `
						<h3>Hello from file share!</h3>
						<br/>
						<p>Login in service with password: <strong>${password}</strong> </p>
						`
					};

				let transporter = nodemailer.createTransport({
						host: "smtp.mail.ru",
						port: 465,
						secure: true,
						auth: {
							user: `${process.env.EMAIL}`,
							pass: `${process.env.EMAIL_PASS}`
						}
					});

				await transporter.sendMail(message).then(() => {
					res.json("ok")
				})
		}

		async login(req, res) {
				const {email, password} = req.body;

				if (email.indexOf('@') == -1)
				{
					res.json({
						status: "error"
					});
					return;
				}

				const hashPassword = sha256(password + 'fgvhbjnm')
				
				let user;

				await db.query(`SELECT * FROM public."users" WHERE email = '${email}' AND password = '${hashPassword}'`).then((result) => {
						user = JSON.parse(JSON.stringify(result.rows)) 
				})

				if (user.length === 0) {
					res.json({
						status: "error"
					})
					return
				}
				
				res.cookie('key', user[0].key, {httpOnly: true})
				res.json({
					status: "ok",
					name: user[0].name
				})
		}
}

module.exports = new authController();