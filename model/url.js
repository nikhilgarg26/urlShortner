const mongoose = require("mongoose")
const { stringify } = require("querystring")

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectedUrl: {
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
    createdBy:{
        type:String,
        required:true,
    }
}, { timestamps: true })

const URL = mongoose.model("url", urlSchema)

module.exports = {URL}