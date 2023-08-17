const accountControllerFor = require("./crudAccountController")
const crudDocumentControllerFor = require("./crudDocumentController")
const crudRouter = require("./crudAccountRouter")

const emailTemplate = {}
let sendEmail = true
let verifyPassword = {
    delete : true,
    changeName : true,
    changeEmail : true,

}

const idFromBody  = (req, res, next) =>{
    const {id} = req.body 
    req.document = {}
    req.document.id = id
    next()
}

const idFromParams = (req,res,next) =>{
    const {id} = req.params 
    req.document = {}
    req.document.id = id
    next()
}



//set if 

//set if email should be send
let useSendEmail = (opt) => {
    if(typeof opt === "boolean"){
        sendEmail = opt
    }
    else{
        throw new TypeError("opt should be Boolean type, got " + typeof opt)
    }
}

//set template for controler from user
let configureSendEmail =(controler, template) => {
    let tempEmailTemplate = {...emailTemplate, [controler] : template}
    emailTemplate = tempEmailTemplate
}



module.exports = {
    configureSendEmail, useSendEmail,
    crudAccountControllerFor : accountControllerFor,
    crudRouterFor : crudRouter,
    crudDocumentControllerFor,
    idFromBody,idFromParams

}