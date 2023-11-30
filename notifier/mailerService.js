const nodemailer = require("nodemailer");
const {EMAIL_ADDRESS,EMAIL_PASSWORD}=require('../config/notification.config')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: EMAIL_ADDRESS,
      pass: EMAIL_PASSWORD,
    },
  });


  const message={
    from:EMAIL_ADDRESS,
    to:EMAIL_ADDRESS,
    text:"plaintext version of the messge",
    html:"<p>HTML version of the message</p>"
  }

  transporter.sendMail(message,(err,info)=>{
    if(err){
        console.log('err:',err)
    }
    else{
        console.log('info',info)
    }
  })

  module.exports=transporter