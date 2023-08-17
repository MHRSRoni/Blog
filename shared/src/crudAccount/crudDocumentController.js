
/**
 * controler service from model
 * @param {Object} model model of the controller
 */

const crudDocumentController = (model) =>{

    const createDocument = async (req, res, next) =>{
        try {
            const {...data} = req.body
            //validating
            try {
                await model(data).validate()
            } catch (error) {
                console.log(error)
                return res.status(400).json({data : error.message})
            }
            //creating document
            const document = await model({...data}).save()
            if(!document){
                return res.status(400).json({data : "already exist"})
            }else{
                //response
                return res.status(200).json({data : "created successfully"})
            }
            
        }catch (error) {
            next(error)
        }
    }

    const getDocumentById = async (req, res, next) =>{
        try {
            const {id} = req.document
            //validating
            if(!id){
                return res.status(400).json({data : "couldn't retrive id"})
            }else{
                //finding
                const document = await model.findById(id)
                if(!document){
                    return res.status(400).json({data : "doesn't exist"})
                }else{
                    //response
                    return res.status(200).json({data : document})
                }
            }

        } catch (error) {
            
        }
    }

    const getAllDocument = async (req, res, next) =>{
        try {
            //finding
            const document = await model.find()
            if(!document){
                return res.status(400).json({data : "doesn't exist"})
            }else{
                //response
                return res.status(200).json({data : document})
            }

        } catch (error) {
            next(error)
        }
    }

    const updateDocument = async (req, res, next) =>{
        try {
            const {id} = req.document
            //validating
            if(!id){
                return res.status(400).json({data : "couldn't retrive id"})
            }
            const {...data} = req.body
            //updating document
            const document = await model.findByIdAndUpdate(id,data)
            if(!document){
                return res.status(400).json({data : "failed to update"})
            }else{
                //response
                return res.status(200).json({data : "updated successfully"})
            }
            
        }catch (error) {
            next(error)
        }
    }

    const deleteDocument = async (req, res, next) =>{
        try {
            const {id} = req.document
            //validating
            if(!id){
                return res.status(400).json({data : "couldn't retrive id"})
            }else{
                //finding and deleting
                const deleted = await model.findByIdAndDelete(id)
                if(!deleted){
                    return res.status(400).json({data : "failed to delete, doesn't exist"})
                }else{
                    //response
                    return res.status(200).json({data : "deleted successfully"})
                }
            }
            
        } catch (error) {
            
        }
    }

    return {
        createDocument, deleteDocument, updateDocument, getDocumentById, getAllDocument
    }
    
}

module.exports = crudDocumentController