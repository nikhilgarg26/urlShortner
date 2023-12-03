const { getUser } = require("../service/auth")

async function checkAuth(req, res, next) {
    const userUid = req.cookies?.uuid;

    const user = getUser(userUid);

    req.user = user;
    next();
}

module.exports = {
    checkAuth
}