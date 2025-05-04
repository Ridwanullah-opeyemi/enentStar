
const nodemailer = require('nodemailer');

// Creating the transporter (example using Gmail)
const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
    port: 587,
    secure: false,  
  service: 'Gmail',
  auth: {
    user: "ridwanullahgbolagade@gmail.com",
    pass: "juwf jnwa nixc nfrh" // App password, good!
}
});
let hh = 'ola'
// Using the transporter to send an email
const mailOptions = {
  from: 'vida star',
  to: 'opeyemiolayode85@gmail.com',
  subject: 'Verifys Your Account',
//   text: 'This is a test email sent using Nodemailer.'
  text: `Hi there,\n\nPlease verify your account on [Your Platform Name] by clicking the link below:\n\n${hh}\n\nThank you,\nThe [Your Platform Name] Team`,
  html: `<p>Hi there,</p><p>Please verify your account on <b>[Your Platform Name]</b> by clicking the link below:</p><p><a href="${hh}">Verify Your Account</a></p><p>Thank you,<br>The [Your Platform Name] Team</p>`

};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});












