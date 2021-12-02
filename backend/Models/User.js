const {Schema, model} = require("mongoose")

const UserSchema =  Schema (
    {
        name: {type: String},
        age: {type: Number},
        cool: {type:Boolean}
    }
) 

module.exports = model("User", UserSchema)