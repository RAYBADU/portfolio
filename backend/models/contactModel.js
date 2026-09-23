const mongoose  = require("mongoose")

const contactSchema = new mongoose.Schema(
    {
        name: {type:String, required:true},
        email:{type:String, required:true},
        project:{type:String, required:true},
        message:{type:String, required:true},
    },
    {timestamps:true}
)


const contactModel = mongoose.model("contactModel",contactSchema)
module.exports = contactModel;