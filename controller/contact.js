const dotenv=require('dotenv');

const nodemailer = require('nodemailer');
const contact = require('../models/contact');


dotenv.config()
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
module.exports={

AddContact:async (req, res) => {
  
    const { name, email, number, message } = req.body;

    // Save contact to the database
    await contact.create({ name, email, number, message });
    req.session.successMessage2 = 'Contact form submitted';
    res.redirect('/')
  console.log('contact saved scucessfully');
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'cyenosure@gmail.com',
        subject: `Enquiry from website`,
        html: `
          <h1>Contact Form Enquiry</h1><br/>
          Name: ${name}<br/><br/>
          Email: ${email}<br/><br/>
          Number: ${number}<br/><br/>
          Message:<p>${message}</p>
        `
      }; 
    
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response );
        }
      });
      


    },
 
    


}



