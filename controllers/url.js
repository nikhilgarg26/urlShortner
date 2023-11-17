const shortid = require("shortid");
const { URL } = require("../model/url")

const handleURL = async (req, res) => {
    
    const body = req.body
    if (!body.url) return res.status(400).json({ error: "URL is required. " })
    const shortId = shortid(10)

    const url = new URL({
        shortId: shortId,
        redirectedUrl: body.url,
        visitHistory: [],
        createdBy: req.user._id
    })

    await url.save()

    return res.status(200).redirect("/")
}

const handleRedirect = async (req, res) => {
    const shortId = req.params.shortId

    const redirect = await URL.findOneAndUpdate({ shortId }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            },
        },
    })

    res.redirect(redirect.redirectedUrl);
}

const handleAnalytics = async (req, res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOne({ shortId })

    // console.log(entry.schema)

    res.status(200).json({
        totalClicks: entry.visitHistory.length,
        details: entry.visitHistory,
    })
}

module.exports = { handleURL, handleRedirect, handleAnalytics }