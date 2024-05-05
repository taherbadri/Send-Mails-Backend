const errors = require("../errors");
const { isTokenValid } = require("../utils");

const userAuthenticationMiddleware = async (req, res, next) => {
	const { token } = req.signedCookies;
	if (!token) {
		throw new errors.UnauthorizedError("Authentication Invalid");
	}
	try {
		const payload = isTokenValid({ token });
		req.user = {
			username: payload.username,
			userId: payload.userId,
			role: payload.role,
		};
		next();
	} catch (error) {
		throw new errors.UnauthorizedError("Authentication Invalid");
	}
};

const authorizePermissions = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			throw new errors.ForbiddenAccessError(
				"User not authorized to access this route"
			);
		}
		next();
	};
};

module.exports = { userAuthenticationMiddleware, authorizePermissions };
