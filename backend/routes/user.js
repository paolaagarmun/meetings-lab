const express = require('express')
const {createUser,getUsers,getOneUser} = require('../controller/userController')
const router = express.Router();


router.get("/", getUsers)
router.get("/user/:id",getOneUser)
router.post("/user", createUser )



module.exports = router;