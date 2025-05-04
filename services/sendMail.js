const transporter = require("./transporter");

const sendMail = async () => {
    const mailOptions = {
        from: 'ridwanullahgbolagade@gmail.com', // "Name" <email>
        to: "opeyemiolayode85@gmail.com",
        subject: "Validate Your Email Address and Confirm Your Registration",
        text: "Hi ridwanullah, We are glad to welcome you to our platform. Take your time to explore all our various services.",
        html: `<p>Hi there,</p>

  <p>Thank you for registering on <b>[Your Platform Name]</b>!</p>

  <p>Please confirm your registration by clicking the button below:</p>

  <p style="margin-bottom: 20px;">
    <a href="" style="background-color: #007bff; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
      Confirm Your Registration
    </a>
  </p>

  <p>If you did not register for an account, please disregard this email.</p>

  <p style="margin-top: 30px;">Welcome to [Your Platform Name]!</p>
  <p>The [Your Platform Name] Team</p>`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.response);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

module.exports = sendMail;
