const {crudAccountControllerFor, crudRouterFor} = require("../../../shared/src/crudAccount")
const adminRouter = require("express").Router()
const adminModel = require("../models/adminModel")

const crudControler = crudAccountControllerFor(adminModel)

// adminRouter.post("/signup", crudControler.signup)
// adminRouter.post("/login", crudControler.login)
// adminRouter.get("/profile", crudControler.profile)
// adminRouter.delete("/profile/delete", crudControler.deleteAccount)
// adminRouter.post("/profile/change-name", crudControler.changeName)
// adminRouter.post("/profile/change-email", crudControler.changeEmail)
// adminRouter.post("/profile/change-password", crudControler.changePassword)

adminRouter.use(crudRouterFor(adminModel))

module.exports = adminRouter