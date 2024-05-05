const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
	const testAccount = await nodemailer.createTestAccount();
	const transporter = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: process.env.MAIL_PORT,
		auth: {
			user: process.env.MAIL_AUTH_USER,
			pass: process.env.MAIL_AUTH_PASSWORD,
		},
	});

	const info = await transporter.sendMail({
		from: `"TAB" <tab@gmail.com>`,
		to: `bar@example.com`,
		subject: "Hello from TAB",
		html: `<h2>sending mails with node.js</h2>`,
	});
	res.json({ info });
};

const sgMail = require("@sendgrid/mail");
const { StatusCodes } = require("http-status-codes");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMailViaSendGrid = async (req, res) => {
	const msg = {
		to: `bar@example.com`,
		from: `"TAB" <tab@gmail.com>`,
		subject: "Hello from TAB",
		html: `<h2>sending mails with node.js</h2>`,
	};
	try {
		const info = await sgMail.send(msg);
		console.log(info);
	} catch (error) {
		console.log(error);
	}
	res.status(StatusCodes.OK).json({ msg: "mail sent successfully" });
};

module.exports = sendEmail;
