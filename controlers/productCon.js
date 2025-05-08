const productModel = require("../model/product");

const AddProduct = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const image = req.file?.path; 

        if (!title || !description || !image) {
            return res.status(400).json({
                status: "error",
                message: "All fields are required"
            });
        }

        const product = await productModel.create({ title, description, image });

        res.status(200).json({
            status: "success",
            message: "Product added successfully",
            product
        });
    } catch (error) {
        next(error);
    }
};

module.exports = AddProduct;
