
const updateService=async(req,dataModel)=>{
    try {
        let email= req.headers['email'];
        let id = req.params.id;
        let body = req.body;
        let data  = await dataModel.updateOne({_id:id,userEmail:email},body)
        return {status:"success",data:data}
        
    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}

module.exports = updateService;