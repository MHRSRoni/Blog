const { encode, compare } = require("./hash")

/**
 * controler service from model
 * @param {Object} model model of the controller
 * @returns {{ signup: Function, login: Function, profile: Function, deleteAccount: Function, changeEmail: Function, changeName: Function, changePassword: Function }} controller function
 */
const controlerFor = (model) =>{
    
 const signup = async (req, res, next) =>{
        try {
            const {name,email,password} = req.body
            console.log(req.body)
            //validating data
            if(!name || !email || !password){
                return res.status(200).json({data : "fill all the field"})
            }else{
                //checking email avalability
                const emailExist = await model.findOne({email})
                if(emailExist){
                    return res.status(400).json({data : "email already have account"})
                }else{
                    //password encoding
                    const hashPassword = await encode(password)
                    //creating account
                    const account =await new model({
                        name, email, password : hashPassword
                        //saving account
                    }).save()
                    
                    // console.log(account)
                    return res.status(200).json({data : "account created"})
                }
            }
        } catch (error) {
            next(error)
        }
    }
    
    const login = async (req, res, next) =>{
        try {
            const {email, password} = req.body
            //validating data
            if( !email || !password){
                return res.status(400).json({data : "fill all the field"})
            }
            //finding account
            const account = await model.findOne({email})
            if(!account){
                return res.status(404).json({data : "account not found"})
            }
            else{
                //verifying password
                const rightPass = await compare(password, account.password)
                if(!rightPass){
                    return res.status(400).json({data : "email and password doesn't match"})
                }
                else{
                    //response
                    return res.status(200).json({data : "Successfully loged in"})
                }
            }
        } catch (error) {
            next(error)
        }
    }
    
    
    const profile = async (req, res, next) =>{
        try {
            const {id} = req.body
            //validating
            if(!id){
                return res.status(400).json("fill all the field")
            }
            else{
                //finding account
                const account = await model.findById(id)
                if(!account){
                    return res.status(500).json("something went wrong")
                }
                else{
                    //removing password and  response
                    const {password : secret, ...data} = account._doc
                    res.status(200).json({data})
                }
            }
    
        } catch (error) {
            next(error)
        }
    }
    
    const deleteAccount = async (req, res, next)=>{
        try {
            const {id, password} = req.body
            //validating
            if(!id){
                return res.status(400).json("fill all the field")
            }
            else{
                //finding account
                const account = await model.findById(id)
                if(!account){
                    return res.status(404).json("Something went wrong")
                }
                else{
                    //verifying password
                    const rightPass = await compare(password, account.password)
                    if(!rightPass){
                        return res.status(400).json("Wrong password")
                    }
                    else{
                        //deleting account
                        const deleted = await model.findByIdAndDelete(id)
                        if(!deleted){
                            return res.status(404).json("Something went wrong")
                        }
                        else{
                            //response
                            return res.status(200).json("deleted successfully")
                        }
                    }
                }
            }
    
        } catch (error) {
            next(error)
        }
    }
    
    const changeEmail = async (req, res, next) =>{
        try {
            const {id, email, password} = req.body
            //validating
            if(!id || !email || !password){
                return res.status(400).json("fill all the field")
            }
            else{
                //check availability of email
                const emailExist = await model.findOne({email})
                if(emailExist){
                    return res.status(400).json("email already have account")
                }
                else{
                    //finding account
                    const account = await model.findById(id)
                    if(!account){
                        return res.status(404).json("something went wrong")
                    }
                    else{
                        //verifying password
                        const rightPass = await compare(password, account.password)
                        if(!rightPass){
                            return res.status(400).json("wrong password")
                        }
                        else{
                            //update email
                            const updated = await model.findByIdAndUpdate(id,{email})
                            if(!updated){
                                return res.status(500).json("something went wrong")
                            }
                            else{
                                //response
                                return res.status(200).json("Successfully updated email")
                            }
                        }
    
                    }
                }
            }
    
    
        } catch (error) {
            next(error)
        }
    }
    
    const changePassword = async (req, res, next) =>{
        try {
            const {id, password, newPassword} = req.body
            //validating
            if(!id || !password || !newPassword){
                return res.status(400).json("fill all the field")
            }
            else{
                //find the account
                const account = await model.findById(id)
                if(!account){
                    return res.status(404).json("something went wrong")
                }
                else{
                    //verifying password
                    const rightPass = await compare(password, account.password)
                    if(!rightPass){
                        return res.status(400).json("wrong password")
                    }
                    else{
                        //change password
                        const hashPassword = await encode(password)
                        const updated = await model.findByIdAndUpdate(id,{password : hashPassword})
                        if(!updated){
                            return res.status(500).json("something went wrong")
                        }
                        else{
                            //response
                            return res.status(200).json("Password change successfull")
                        }
                    }
                }
            }
    
    
        } catch (error) {
            next(error)
        }
    }
    
    
    const changeName = async (req, res, next) =>{
        try {
            const {id, name, password} = req.body
            //validating
            if(!id || !name || !password){
                return res.status(400).json("fill all the field")
            }
            else{
                //find the account
                const account = await model.findById(id)
                if(!account){
                    return res.status(404).json("account not found")
                }
                else{
                    //verifying password
                    const rightPass = await compare(password, account.password)
                    if(!rightPass){
                        return res.status(400).json("wrong password")
                    }
                    else{
                        //update Name
                        const updated = await model.findByIdAndUpdate(id,{name})
                        if(!updated){
                            return res.status(500).json("something went wrong")
                        }
                        else{
                            //response
                            return res.status(200).json("updated successfully")
                        }
                    }
                }
            }
    
    
        } catch (error) {
            next(error)
        }
    }

    return {
        signup, login, profile, deleteAccount, changeEmail, changeName, changePassword
    }

}

module.exports = controlerFor





