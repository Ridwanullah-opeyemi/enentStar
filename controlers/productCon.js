
const productModel = require("../model/product")

const AddProduct = async(req,res,next)=>{
    const product = productModel.create(req.body)
    if (!product) {
        res.status(400).json({
            status: "error",
            message: "error adding products"
        })
        return
    }
    res.status(200).json({
        status: "success",
        message: "product added succesful",
        product
    })
    try {
        
    } catch (error) {
        next(error)
    }
}

module.exports = AddProduct