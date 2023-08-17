const BlogModel = require("../models/blogModel")
const {Types} = require("mongoose")

exports.createComment =async (req, res, next)=>{
    try {
        const {id} = req.params
        const {comment, authorId} = req.body 
        const post =await BlogModel.findByIdAndUpdate( id,{$push : {comments : {comment,authorId}}})
        console.log(post)

        return res.status(201).json({data : "successfull"})

    } catch (error) {
        next(error)
    }
}

exports.likeBlog = async (req, res, next) =>{
    try {
        const {id} = req.body 
        const ipAddress = req.ip
        // const update = await BlogModel.findByIdAndUpdate(id,{$addToSet : {likes : req.ip}})
        const update = await BlogModel.aggregate([
            {$match : {_id : id}},
            {
                $addFields: {
                  likes: {
                    $cond: {
                      if: { $in: [ipAddress, '$likes'] },
                      then: { $setDifference: ['$likes', [ipAddress]] },
                      else: { $concatArrays: ['$likes', [ipAddress]] }
                    }
                  }
                }
              }
        ])
        if(update){
            return res.status(200).json({data : "success"})
        }
        else{
            return res.status(500).json({data : "failed"})
        }
    } catch (error) {
        next(error)
    }
}

exports.ReadBlog = async (req, res, next) =>{
    try {
        const {id} = req.params
        const ip = req.ip
        console.log(ip)
        const getUpdate = await BlogModel.findByIdAndUpdate(id,{$addToSet : {views : ip}})
        const getAndUpdate = await BlogModel.aggregate([
            {$match : {_id : new Types.ObjectId(id)}},
            {$project : {
                title : true,
                description : true,
                likes : true,
                viewsCount : { $size : "$views"},
            }}
        ])
        console.log(getAndUpdate)
        if(getAndUpdate){
            return res.status(200).json({data : getAndUpdate})
        }else{
            return res.status(500).json({data : "error"})
        }

    } catch (error) {
        next(error)
    }
}

exports.ReadAllBlog = async (req, res, next) =>{
    try {
        const data = await BlogModel.aggregate([
            {$match : {}},
            {$project : {
                title : true,
                description : true,
                viewsCount : {$size : "$views"},
                likesCount : {$size : "$likes"},
                liked : {$cond : { if : {$eq : ["$likes", [req.ip]]}, then : true, else : false}},
                updatedAt : true,
                createdAt : true,
            }}
        ])
        console.log(data)
        if(data){
            return res.status(200).json({data})
        }
        else{
            return res.status(500).json({data : "something went wrong"})
        }

    } catch (error) {
        next(error)
    }
}