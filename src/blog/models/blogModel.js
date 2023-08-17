const {Schema, model} = require("mongoose")

const BlogSchema = new Schema({
    title : {
        type : String,
        trim : true,
        default : "untitled",
        required : true
    },
    description : {
        type : String,
        trim : true,
        required : true
    },
    comments : [
            {
                type : Object,
                commnet : String,
                authorId : {
                    type : Schema.Types.ObjectId,
                    ref : "UserModel",
                    required : true
                }
            }
    ],
    likes : {
        type : Array,
    },
    views : {
        type : Array
    },
    author : {
        type : String,
        default : "Roni"
    }
},{ timestamps : true, versionKey : false})

const BlogModel = model("blog", BlogSchema)

module.exports = BlogModel