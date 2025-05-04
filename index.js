const express = require("express")

const transpoter = require("./services/transporter");
// const sendMail = require("./services/sendMail");
const errorhanddler = require("./middlewell/errorHandler");
const connectDb = require("./config/connectDb");
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())


app.listen(3001, () => {
    console.log("listing to port 3001");
})
// sendMail()
connectDb()

app.get("/", (req, res, next) => {
    try {
        if (3 !== 3) {
            res.send("good");
            return
        }
        res.send("hello welcome to star api...")
    } catch (error) {
        next(error);

    }
})


// Router
const userRouter = require("./route/userRoute");






// use router
app.use(userRouter)






app.use("/{*any}", errorhanddler)

app.all("/{*any}", (req, res) => {
    res.status(400).json(`${req.method}, ${req.originalUrl} is not the end point of the server`);
})




