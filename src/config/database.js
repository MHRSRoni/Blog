//dependencies 
const mongoose = require("mongoose")

const database = {}

database.connect = async () =>{
    await mongoose.connect(process.env.DATABASE_URI)

}

module.exports = database
