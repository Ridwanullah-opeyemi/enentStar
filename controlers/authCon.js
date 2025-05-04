const userModel = require("../model/authModel");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const generateRandomString = require("../util/generateRandomString");
const sendMail = require("../services/createMail");
const blackModel = require("../model/blackedlistuser");



const createUser = async (req, res, next) => {
    try {
        const { password, email, name } = req.body
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(password, salt)
        ''
        const verificationToken = generateRandomString(10)
        const verificationExp = Date.now() + 2 * 60 * 1000;

        const user = await userModel.create({ ...req.body, password: hashPass, verificationToken, verificationExp })

        sendMail(verificationToken, name, email)

        if (!user) {
            res.status(404).json({
                status: "error",
                massage: "create errror"
            })
            return
        }
        res.status(200).json({
            status: 'success',
            massage: "create succesful",
            user
        })
    } catch (error) {
        next(error);

    }
}

const signIn = async (req, res, next) => {
    const { password, email } = req.body
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            res.status(400).json({
                status: "error",
                message: "invalid email "
            })
            return
        }

        const correctPass = await bcrypt.compare(password,user.password)

        if (!correctPass) {
            res.status(400).json({
                status: "error",
                message: "invalid password"
            })
            return
        }

        const token = jwt.sign({ email: user.email, id: user._id }, process.env.jwt_secret, { expiresIn: "1d" })

        res.status(200).json({
            status: "signIn",
            message: "user signIn succsful",
            token,
            user
        })
    } catch (error) {
        next(error)
    }
}

const signOut = async (req,res) => {
    const {token} = req.body
    await blackModel.create({token})
    res.status(200).json({
        status: "success",
        message: "sign out succesful"
    })
}

module.exports = {
    createUser,
    signIn,
    signOut
} 