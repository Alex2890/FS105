import nodemailer from 'nodemailer';

const sendEmail = async ({ email, subject, message }) => {
  // Create a transporter using the SMTP server settings
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,      // e.g., 'smtp.gmail.com' for Gmail
    port: process.env.EMAIL_PORT,      // e.g., 587
    secure: false,                     // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME, // your SMTP username
      pass: process.env.EMAIL_PASSWORD, // your SMTP password
    },
  });

  // Define email options
  const mailOptions = {
    from: '"Your Name" <your-email@example.com>', // sender address
    to: email,                                    // list of receivers
    subject: subject,                             // Subject line
    text: message,                                // plain text body
    // html: "<p>Your HTML here</p>"              // HTML body (optional)
  };

  // Send the email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
