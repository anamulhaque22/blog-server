const dataModel = require('../../models/blog/BlogModel');
const createService = require('../../services/common/createService');
const updateService = require('../../services/common/updateService');
const listService = require('../../services/common/listService');
const deleteService = require('../../services/common/deleteService');


exports.createBlog = async(req,res)=>{
    let result = await createService(req,dataModel)
    res.status(200).json(result)
}
exports.updateBlog = async(req,res)=>{
    let result = await updateService(req,dataModel)
    res.status(200).json(result)
}

exports.blogList = async(req,res)=>{
    let searchRgx = {"$regex":req.params.search,"$options":"i"}
    let searchArray = [{name: searchRgx}]
    let result = await listService(req,dataModel,searchArray)
    res.status(200).json(result)
}

exports.deleteBlog= (req,res)=>{
    let result = deleteService(req,dataModel)
    res.status(200).json(result)
}