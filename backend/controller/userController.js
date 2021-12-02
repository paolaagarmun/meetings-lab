const bcrypt = require('bcrypt')
const User = require('../Models/User')

const { generateJwt } = require('../helpers/processJwt')

//signup
const signUpUser = async (req, res) => {
    const { email } = req.body;
    const testEmail = await User.findOne({email})
    if (testEmail) {
        return res.status(500).json({message: "Couldn't create user"})
    }
    const user = new User(req.body);
    try {
        const salt = bcrypt.genSaltSync()
        user.password = bcrypt.hashSync(req.body.password, salt);
        user.save();
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({message: "Err is in catch signUpUser"})
    }
}

const loginUser = async ( req, res ) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if (!user) {
        return res.status(500).json({message: "Check creds"})
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
        return res.status(500).json({message: "Please check creds"})
    } 
    const token = await generateJwt(user._id);
    return res.status(200).json({token, user})
}



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





module.exports = 
{   signUpUser,
    loginUser,
    getUsers,
    getOneUser
}

