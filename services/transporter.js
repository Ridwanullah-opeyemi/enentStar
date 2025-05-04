const nodemailer = require('nodemailer');
const ee = require("dotenv").config()

const transporter = nodemailer.createTransport({
    host: process.env.transhost,
    port: 587,
    service: "Gmail", // optional when host is set, but okay to include
    secure: false,    // true for port 465, false for 587 (TLS)
    auth: {
        user: process.env.appEmail,
        pass: process.env.appPassword // App password, good!
    }
});

// Verify connection configuration
transporter.verify((error, success) => {
    if (error) {
        console.error("Error verifying transporter:", error);
    } else {
        console.log("Server ready to send mail.");
    }
});

module.exports = transporter;
