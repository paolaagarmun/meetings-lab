const express = require('express')
const {loginUser, signUpUser,getUsers,getOneUser} = require('../controller/userController')
const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signUpUser)

router.get("/", getUsers)
router.get("/user/:id",getOneUser)



module.exports = router;