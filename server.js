const express=require('express');
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const {PORT}=require('./config/server.config')
const {db_uri}=require('./config/db.config')

const app=express()

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

//connect mongoose to mongoDb
// mongoose.connect(db_uri)

//starting the app to listen to the given port
app.listen(PORT,()=>{
    console.log('APP IS LISTENING TO THE PORT',PORT)
    mongoose.connect(db_uri)
    // mongoose.connect(db_uri,()=>{
    //     //success callback
    //     console.log('connected to mongodb uri',db_uri)
    // },(err)=>{
    //     //failure callback
    //     console.log('Error while connecting to mongoDb uri',err)
    // })
})

