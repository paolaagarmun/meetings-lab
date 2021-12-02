const User = require('../Models/User')

const getUsers = async (req,res) => {
    const users = await User.find();
    try {
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({message: "couldn't find user"})
    }
}

const getOneUser = async (req,res) => {
    const { id } = req.params;
    const user = await User.findById(id)
    try {
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message: "couldn't find user"})
    }
}

const createUser = async (req,res) => {
    const user = await User.create(req.body);
    try {
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({message: "couldn't create user"})
    }
}



module.exports = 
{createUser,
    getUsers,
    getOneUser}

