const bcrypt = require("bcrypt")

exports.encode = async (data)=>{
    const encodedData = await bcrypt.hash(data, 10)
    if(!encodedData){
        console.log("failed to encode data")
    }
    else{
        return encodedData
    }
}

exports.compare = async (data, hash) =>{
    const right = await bcrypt.compare(data, hash)
    return right
}