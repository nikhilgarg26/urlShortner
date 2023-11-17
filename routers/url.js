const express = require("express")
const { handleURL, handleRedirect, handleAnalytics } = require("../controllers/url")
const router = express.Router()

router.post("/", handleURL)

router.get("/:shortId", handleRedirect)

router.get("/analytics/:shortId", handleAnalytics)

module.exports = router