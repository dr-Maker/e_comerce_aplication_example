var User = require("../models/UserModels");

const saveUser = async(req, res) =>{

    const params = req.body;

    try {

    let user_to_save = new User(params)
        
        const userStored = await user_to_save.save();

        return res.status(200).send({
        status: "success",
        user: userStored
        });

        } catch (error) {
        return res.status(500).send({
        status: "error",
        message: error
        });

    }

}

const getUserById = async(req, res) =>{
     console.log(req.params);
     return res.status(200).send({message: "success"});
}


module.exports = {
    getUserById,
    saveUser
}