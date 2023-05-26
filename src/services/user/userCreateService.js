const userCreateService = async(req,dataModel)=>{
    try {
        let body = req.body;
        let data = await dataModel.create(body)
        return {status:"success",data:data}
        
    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}

module.exports = userCreateService;