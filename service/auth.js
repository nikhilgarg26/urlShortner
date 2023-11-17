const sessionIdMap = new Map()

function setUser(sessionId, user){
    sessionIdMap.set(sessionId, user)

}

function getUser(sessionId){
    return sessionIdMap.get(sessionId)
}

module.exports = {
    setUser, getUser
}