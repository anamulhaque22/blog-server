const dataModel = require('../../models/users/UserModel');
const userCreateService = require('../../services/user/userCreateService');
const userLoginService = require('../../services/user/userLoginService');
const userUpdateService = require('../../services/user/userUpdateService');
const userDetailsService = require('../../services/user/userDetailsService');


exports.registration = async(req,res)=>{
    let result = await userCreateService(req,dataModel)
    res.status(200).json(result)
}
exports.login = async(req,res)=>{
    let result = await userLoginService(req,dataModel)
    res.status(200).json(result)
}
exports.profileUpdate = async(req,res)=>{
    let result = await userUpdateService(req,dataModel)
    res.status(200).json(result)
}
exports.profileDetails = async(req,res)=>{
    let result = await userDetailsService(req,dataModel)
    res.status(200).json(result)
}