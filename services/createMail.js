
const transporter = require("./transporter")


const sendMail = async (token,name,mail) => {
    const froms = "vidaStar"
    const mailOption = {
        from: "vidaStar",
        to: mail,
        subject: `${name}, Confirm Your Registration`,
        text: `${name}, We are glad to welcome you to our ${froms}. Take your time to explore all our various services.`,
        html: `<p>Hi there,</p>${name}<p>Please verify your account on <b>${froms}</b> by clicking the link below:</p><p><a href="http://localhost:3001/verify/${token}">Verify Your Account</a></p>${name}<p> Thank you,<br>The ${froms} Team</p>`
    }
     transporter.sendMail(mailOption)
}

module.exports = sendMail