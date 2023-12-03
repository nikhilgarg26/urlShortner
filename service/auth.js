// const sessionIdMap = new Map()
const jwt = require("jsonwebtoken")

const secret = 'Nikhil$123'

function setUser(user) {

    return jwt.sign({
        _id: user._id,
        email: user.email,
    }, secret)
    // sessionIdMap.set(sessionId, user)

}

function getUser(token) {
    // return sessionIdMap.get(sessionId)
    if (!token) return null
    return jwt.verify(token, secret)
}

module.exports = {
    setUser, getUser
}