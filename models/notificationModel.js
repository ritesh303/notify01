const mongoose=require('mongoose')

const ticketSchema=new mongoose.Schema({
    subject:{
        type:String,
        required:true,
        maxLength:200,
        minLength:3
    },
    content:{
        type:String,
        required:true
    },
    recipientEmails:{
        type:[String],
        required:true
    },
    sendStatus:{
        type:String,
        required:true,
        default:"UNSENT"
    },
    requester:{
        type:String,
        required:true,
        match:/\S+@\S+\.\S+/
    },
    ticketId:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
        immutable:true
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now()
    }
})

module.exports=mongoose.model('EmailNotitification',ticketSchema)