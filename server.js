const express=require('express');
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const {PORT}=require('./config/server.config')
const {db_uri}=require('./config/db.config')
const notificationRoutes=require('./routes/notification.routes');
const { transporter } = require('./notifier/mailerService');

const app=express()

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

notificationRoutes(app)
//starting the app to listen to the given port
app.listen(PORT,()=>{
    console.log('APP IS LISTENING TO THE PORT',PORT)
   // connect mongoose to mongoDb
    mongoose.connect(db_uri)
    transporter.verify(function(err,success){
        if(error){
            console.log(err)
        }
        else{
            console.log("server is ready to take over the message",success)
        }
    })
 
})

   // mongoose.connect(db_uri,()=>{
    //     //success callback
    //     console.log('connected to mongodb uri',db_uri)
    // },(err)=>{
    //     //failure callback
    //     console.log('Error while connecting to mongoDb uri',err)
    // })

