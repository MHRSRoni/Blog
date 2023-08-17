module.exports = (err, req, res, next) =>{
    console.log(err)
    return res.status(500).json("internal server error")
}