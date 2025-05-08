const express = require("express");
const { AddProduct, GetAllProducts, UpdateProduct } = require("../controlers/productCon");
const uploadImage = require("../middlewell/multer");

const productRouter = express.Router();

productRouter.post("/addproduct", uploadImage.single("image"), AddProduct);
productRouter.get("/products", GetAllProducts); 
productRouter.put("/update/:id", uploadImage.single("image"), UpdateProduct);
    

module.exports = productRouter;
