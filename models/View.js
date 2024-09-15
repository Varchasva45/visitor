const mongoose = require('mongoose')

const viewSchema = mongoose.Schema({
    Date: {
        type: Date,
        default: Date.now()
    }
})

const View = mongoose.model('View', viewSchema)
module.exports = View