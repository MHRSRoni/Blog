const { READ_BLOG, CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG } = require("./PermissionNames")
const {USER, BANED_USER} = require("./RoleNames")

const USER = [READ_BLOG, CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG]
const BANED_USER = [READ_BLOG]