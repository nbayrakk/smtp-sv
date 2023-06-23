const express = require('express');
const nodemailer = require('nodemailer');


const app = express();
const PORT =process.env.PORT || 5001

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: '[USERNAME]',
        pass: '[PASSWORD]'
    }
});

// send email

app.get("/",(req,res)=>{
  res.send("<h1>selam</h1>")
  
})
app.get("/s",(req,res)=>{
    res.send("geldi")
    sendMail({}, (err, info) => {
      if (err) {
        res.status(400);
        res.send({ error: "Failed to send email" });
      } else {
        console.log("Email has been sent");
        res.send(info);
      }
    });
})
async function sendMail(user) {

    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,

      auth: {
        user: "1bilsencom@gmail.com", // generated ethereal user
        pass: "ywoxcukqbhwcvuao", // generated ethereal password
      },
    });
    const a = {name: "John", age: 30, city: "New York"}
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '1bilsencom@gmail.com', // sender address
      to: "nafizbayrak@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "test", // plain text body
      html: JSON.stringify(a), // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

app.listen(PORT,()=> {
    console.log(`Server run this port:${PORT} `)
})