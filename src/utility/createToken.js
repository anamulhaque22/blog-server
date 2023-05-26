const jwt = require("jsonwebtoken");
const createToken= async (data) => {
    // let Payload={exp: Math.floor(Date.now() / 1000) + (24*60*60), data:data}
    let Payload={expiresIn: '7d', data:data}
    return await jwt.sign(Payload, 'secretKey12345');
}
module.exports=createToken