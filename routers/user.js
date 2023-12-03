const express = require("express")
const router = express.Router()
const { handleLogin, handleSignup } = require("../controllers/user");
const { v4: uuidv4 } = require('uuid');

router.post("/login", handleLogin)

router.post("/", handleSignup)

module.exports = router