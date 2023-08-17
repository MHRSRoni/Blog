//security dependencies
const limiter = require("express-rate-limit")
const sanitizer = require("express-mongo-sanitize")
const helmet = require("helmet")
const csp = require("helmet-csp")
//cors dependencies
const cors = require("cors")
//logger dependencies
const logger = require("morgan")

//configuration 
const config = require("./config.json")


//security implementation
const limit = limiter({
    WindowMs : config["limiter-time-count-m"]*60*1000,
    max : config["limiter-max-count"],
    message : "Too many request, try again after" + config["limiter-time-count-m"],
    standardHeaders : true,
    legacyHeaders : false
})



const secure = (app) =>{
    app.use(cors())
    app.use(limit)
    app.use(helmet())
    app.use(csp({useDefaults : true}))
    app.use(sanitizer())
    app.use(logger("dev"))
}



module.exports = secure