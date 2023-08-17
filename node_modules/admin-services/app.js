//dependencies
const express = require("express")
//database 
const database = require("../config/database")
//security 
// const secure = require("../shared/security/secure")
//configaration
const configure = require("../config/configure")
const adminRouter = require("./routers/adminRouter")
const errorController = require("./controllers/errorController")
const setting = require("./config.json")
const blogRouter = require("../blog/routers/blogRouter")


const app = express()

//app setting


//security implementation
// secure(app)


//configure
configure(app)
app.use(express.json({limit : "10mb"}))

//router
app.use(setting["router-path"], adminRouter)
app.use("/api/v1/blog", blogRouter)
app.use("*",(req, res, next) => {
    return res.status(404).json("page not found")
})
app.use(errorController)

//port
const ADMIN_PORT = process.env.ADMIN_PORT || 5000
//starting function
app.start = () =>{
        database.connect() //database implementation
        .then(
            ()=>{
                console.log("database connected from Admin server ✅")
                app.listen(ADMIN_PORT, ()=>console.log("Admin server is running on port", ADMIN_PORT + " ✅"))
                .on("error",(error)=>{
                    if (error.code === 'EADDRINUSE'){console.log("Couldn't start Admin Server, port may be in use ❌")}
                    else{
                        "there some issue in Admin-Service, log error for more 📛"
                    }
                })}
        )
        .catch(
            ()=>console.log("failed to connect to database from Admin server ❌")
        )
}

app.start()

module.exports = app