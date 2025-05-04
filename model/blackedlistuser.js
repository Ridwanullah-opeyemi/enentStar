const mongoose  = require("mongoose")

const blackSchema = mongoose.Schema({
    token: {
        type: String
    }
})

const blackModel = mongoose.model("blackedUser", blackSchema)

module.exports = blackModel