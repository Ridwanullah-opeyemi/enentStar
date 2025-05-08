const express = require("express")
const AddProduct = require("../controlers/productCon")
const uploadImage = require("../middlewell/multer")

const productRouter = express.Router()


productRouter.post("/addproduct",uploadImage.single("image"),AddProduct)


module.exports = productRouter