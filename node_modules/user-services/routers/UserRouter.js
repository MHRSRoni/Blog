const userRouter = require("express").Router()

const {crudRouterFor,crudAccountControllerFor} =require("../../../shared/src/crudAccount")
const UserModel = require("../models/userModel")

// const crudRouter = crudRouterFor(UserModel)

// userRouter.use(crudRouter)
const crud = crudAccountControllerFor(UserModel)
userRouter.post("/signup", crud.signup)
userRouter.post("/login", crud.login)


module.exports = userRouter