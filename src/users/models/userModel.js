const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
    name : {
        type : String,
        trim : true,
        required : true,
        minLength : 3,
        maxLength : 20
    },
    email : {
        type : String,
        trim : true,
        requried : true,
    },
    password : {
        type : String,
        trim : true,
        requried : true,
        minLength : 8,
        maxLength : 128,
    },
    role : {
        type : String,
        default : "user",
        enum : ["user", "read-only-user", "baned"]
    }

},{timestamps : true, versionKey : false})

const UserModel = model("User", UserSchema)

module.exports = UserModel