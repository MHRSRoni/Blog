const {Schema, model} = require("mongoose")

const AdminSchema = new Schema({
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
        required : true,
        unique : true,
    },
    password : {
        type : String,
        trim : true,
        required : true,
        minLength : 8,
        maxLength : 64,
    },
    role : {
        type : String,
        default : "admin",
        enum : ["admin", "baned"]
    }

},{timestamps : true, versionKey : false})

const AdminModel = model("Admin", AdminSchema)

module.exports = AdminModel