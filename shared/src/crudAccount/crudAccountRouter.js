const controllerFor = require("./crudAccountController")
const errorController = require("./errorController")
const router = require("express").Router()

const crudRouter = (model) =>{
    const crud = controllerFor(model)
    router.post("/signup", crud.signup)
    router.post("/login", crud.login)
    router.get("/profile", crud.profile)
    router.delete("/profile/delete", crud.deleteAccount)
    router.put("/profile/change-name", crud.changeName)
    router.put("/profile/change-email", crud.changeEmail)
    router.put("/profile/change-password", crud.changePassword)
    router.use(errorController)

    return router
}



module.exports = crudRouter