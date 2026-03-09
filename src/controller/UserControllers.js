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
    try {

        const id = req.params.id;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                status: "error",
                message: "Usuario no encontrado"
            });
        }

        res.status(200).json({
            status: "success",
            user: user
        });

    } catch (error) {

        res.status(500).json({
            status: "error",
            message: "Error al obtener usuario",
            error: error.message
        });

    }
}

const getAllUsers = async (req, res) => {

    try {

        const users = await User.find();

        res.status(200).json({
            status: "success",
            total: users.length,
            users: users
        });

    } catch (error) {

        res.status(500).json({
            status: "error",
            message: "Error al obtener usuarios",
            error: error.message
        });

    }

};

const updateUser = async (req, res) => {

    try {

        const id = req.params.id;
        const data = req.body;

        const userUpdated = await User.findByIdAndUpdate(
            id,
            data,
            { new: true } // devuelve el registro actualizado
        );

        if (!userUpdated) {
            return res.status(404).json({
                status: "error",
                message: "Usuario no encontrado"
            });
        }

        res.status(200).json({
            status: "success",
            user: userUpdated
        });

    } catch (error) {

        res.status(500).json({
            status: "error",
            message: error.message
        });

    }
}



module.exports = {
    getUserById,
    getAllUsers,
    updateUser,
    saveUser
}