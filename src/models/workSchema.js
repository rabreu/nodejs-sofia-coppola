const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    role:{
        type: String,
        require: true
    },
    year:{
        type: String,
        required: true
    },
    description:{
        type: String,
        requrired: false
    },
    image:{
        type: String,
        required: false
    }
},
{
    collection: "sofiacoppola",
    versionKey: false
}
)

const worksCollection = mongoose.model("sofiacoppola", workSchema)

module.exports = { worksCollection }