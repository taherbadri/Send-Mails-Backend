require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Send Emails");
});

const port = process.env.PORT || 5253;

const start = async () => {
	try {
		app.listen(port, console.log(`server listening on port ${port}...`));
	} catch (error) {
		console.log(error);
	}
};

start();
