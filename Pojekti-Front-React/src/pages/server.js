// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000; // You can use any available port

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use the email service you prefer, e.g., 'Gmail'
  auth: {
    user: 'xhejsihoxha67@gmail.com', // Your email address 
    pass: 'elzxzxzxci1234@!', // Your email password
  },
});

app.post('/sendEmail', (req, res) => {
  const { name, lastname, email, phone, message } = req.body;

  // Email content
  const mailOptions = {
    from: email,
    to: 'xhejsihoxha67@gmail.com',
    subject: 'Contact Form Submission',
    text: `Name: ${name} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error: Unable to send the email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
