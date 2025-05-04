const express = require("express")
const {createUser,signIn, signOut} = require("../controlers/authCon")
const verifyAccount = require("../controlers/accountVerify")

const userRouter = express.Router()


userRouter.post("/signUp",createUser)
userRouter.post("/signIn",signIn)
userRouter.get("/signOut",signOut)
userRouter.get("/verify/:token", verifyAccount)


module.exports = userRouter