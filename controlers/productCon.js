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


const GetAllProducts = async (req, res, next) => {
    try {
        const products = await productModel.find().sort({ createdAt: -1 }); 
        res.status(200).json({
            status: "success",
            products
        });
    } catch (error) {
        next(error);
    }
};

const UpdateProduct = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const image = req.file?.path; // only if a new image is uploaded

        const updateData = { title, description };
        if (image) updateData.image = image;

        const updated = await productModel.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            status: "success",
            message: "Product updated",
            product: updated
        });
    } catch (error) {
        next(error);
    }
};


module.exports = { AddProduct, GetAllProducts, UpdateProduct };
