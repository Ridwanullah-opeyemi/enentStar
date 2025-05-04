const mongoose = require("mongoose")
const dotEnv = require("dotenv")
dotEnv.config()

const mongoDbUrl = process.env.mongoDbUrl

const connectDb = async () => {
    console.log("conneting db...");
    
    try {
        const connected = await mongoose.connect(mongoDbUrl)
        if(connected){
            console.log("db connected✅");
        }
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = connectDb 