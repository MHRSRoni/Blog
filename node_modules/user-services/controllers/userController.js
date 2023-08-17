const UserModel = require("../models/userModel")

//signup
exports.signup = async (req, res, next) =>{
    try {
        const {name,email,password} = req.body
        const user =await new UserModel({
            name, email, password
        }).save()

        res.status(200).json({user})

    } catch (error) {
        next(error)
    }
}