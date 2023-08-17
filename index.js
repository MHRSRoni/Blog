//dependencies
const {fork} = require("child_process")
//import app
require("dotenv").config()


const ADMIN_PROCESS = fork("./src/admin/app")
const USER_PROCESS = fork("./src/users/app")