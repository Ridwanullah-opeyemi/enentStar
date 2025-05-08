// const express = require("express")
const cloudinary = require("cloudinary").v2
const dotEnv = require("dotenv")
dotEnv.config()

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_secret: process.env.cloud_api_secrit,
    api_key: process.env.cloud_api_key
    
})
console.log(process.env.cloud_api_key);

module.exports = cloudinary
