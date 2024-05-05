const BadRequestError = require("./BadRequestError");
const CustomError = require("./CustomError");
const ForbiddenAccessError = require("./ForbiddenAccessError");
const NotFoundError = require("./NotFoundError");
const UnauthorizedError = require("./UnauthorizedError");

module.exports = {
	CustomError,
	NotFoundError,
	BadRequestError,
	UnauthorizedError,
	ForbiddenAccessError,
};
