const express = require("express")
const router = express.Router()
const { handleLogin, handleSignup } = require("../controllers/user");
const { v4: uuidv4 } = require('uuid');

router.post("/", handleLogin)

router.post("/login", handleSignup)

module.exports = router