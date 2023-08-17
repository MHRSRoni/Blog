//dependencies
const express = require("express")
//database
const database = require("../config/database")
//security
const secure = require("../../shared/src/security/secure")
//configuration
const configure = require("../config/configure")
const userRouter = require("./routers/UserRouter")
const errorController = require("./controllers/errorController")
const { crudDocumentControllerFor } = require("../../shared/src/crudAccount")
const blogRouter = require("../blog/routers/blogRouter")
const cors = require('cors')

const app = express()

//add security 
secure(app)

//configure
configure(app)

//json
app.use(express.json({limit : "10mb"}))


//routers
app.use("/api/v1/user", userRouter)
app.use("/api/v1/blog", blogRouter)
app.use(errorController)


//port
const USER_PORT = process.env.USER_PORT || 5000

//starting function
app.start = () =>{
    database.connect()  //database connection
    .then(
        ()=>{
            console.log("database connected from User server ✅")
                app.listen(USER_PORT,()=>console.log("User server is running on port", USER_PORT + " ✅"))
                  .on("error",(error)=>{  //app error
                    if (error.code === 'EADDRINUSE'){console.log("Couldn't start User Server, port may be in use ❌")}
                    else{
                        "there some issue in User-Service, log error for more 📛"
                    }
                })
                } 
    )
    .catch(
        ()=>console.log("failed to connect to database from User server ❌")
    )
}

app.start()