require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middlewares/notFoundMiddleware");
const errorHandlerMiddleware = require("./middlewares/errorHandlingMiddleware");
const sendEmail = require("./controllers/sendMail");

app.get("/", (req, res) => {
	res.send(`<h1>Send Emails</h1><a href="/send">send email</a>`);
});

app.get("/send", sendEmail);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.use(express.json());

const port = process.env.PORT || 5253;

const start = async () => {
	try {
		app.listen(port, console.log(`server listening on port ${port}...`));
	} catch (error) {
		console.log(error);
	}
};

start();
