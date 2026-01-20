var User = require("../models/UserModels");

const getUserById = async(req, res) =>{
     console.log(req.params);
     return res.status(200).send({message: "success"});
}


module.exports = {
    getUserById
}