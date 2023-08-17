const bcrypt = require("bcrypt")

exports.encode = async (data)=>{
    const encodedData = bcrypt.hash(data, 10,(error, hash)=>{
        if(error){
            console.log("failed to encode data")
        }
        else{
            return hash
        }
    })
    return hash
}

exports.compare = async (data, hash) =>{
    const right = bcrypt.compare(data, hash,(err, result)=>{
        if(err){
            console.log("failed to compare data")
        }else{
            return result
        }
    })
    return right
}