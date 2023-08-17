const blogRouter = require("express").Router()
const {crudDocumentControllerFor, idFromParams} = require("../../../shared/src/crudAccount")
const { createComment, ReadBlog, likeBlog, ReadAllBlog } = require("../controllers/blogController")
const BlogModel = require("../models/blogModel")
const crudControler = crudDocumentControllerFor(BlogModel)


blogRouter.get("/", ReadAllBlog)
blogRouter.post("/like", likeBlog)
blogRouter.get("/:id", ReadBlog)
blogRouter.post("/:id/create-comment", createComment)
blogRouter.post("/create", crudControler.createDocument)
blogRouter.put("/update/:id",idFromParams, crudControler.updateDocument)
blogRouter.delete("/delete/:id",idFromParams, crudControler.deleteDocument)


module.exports = blogRouter
