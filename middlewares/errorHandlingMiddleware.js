const { StatusCodes } = require("http-status-codes");

const errorHandlingMiddleware = (err, req, res, next) => {
	const customErrorObject = {
		message:
			err.message || "Something went wrong, please try again after sometime",
		status: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
	};

	return res
		.status(customErrorObject.status)
		.json({ message: customErrorObject.message, err });
};

module.exports = errorHandlingMiddleware;
